import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { getCluster } from '../../lib/cluster';
import { apply } from '../../lib/k8s/apiProxy';
import { ClassWithBaseObject, KubeObject, KubeObjectInterface } from '../../lib/k8s/cluster';
import { clusterAction } from '../../redux/clusterActionSlice';
import { EventStatus, HeadlampEventType, useEventCallback } from '../../redux/headlampEventSlice';
import { ActionButton, AuthVisible, EditorDialog } from '../common';

export interface CreateResourceButtonProps {
  resourceClass: ClassWithBaseObject<KubeObject>;
}

export function CreateResourceButton(props: CreateResourceButtonProps) {
  const { resourceClass } = props;
  const { t } = useTranslation(['glossary', 'translation']);
  const [openDialog, setOpenDialog] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const dispatchCreateEvent = useEventCallback(HeadlampEventType.CREATE_RESOURCE);
  const dispatch = useDispatch();

  const applyFunc = async (newItems: KubeObjectInterface[], clusterName: string) => {
    await Promise.allSettled(newItems.map(newItem => apply(newItem, clusterName))).then(
      (values: any) => {
        values.forEach((value: any, index: number) => {
          if (value.status === 'rejected') {
            let msg;
            const kind = newItems[index].kind;
            const name = newItems[index].metadata.name;
            const apiVersion = newItems[index].apiVersion;
            if (newItems.length === 1) {
              msg = t('translation|Failed to create {{ kind }} {{ name }}.', { kind, name });
            } else {
              msg = t('translation|Failed to create {{ kind }} {{ name }} in {{ apiVersion }}.', {
                kind,
                name,
                apiVersion,
              });
            }
            setErrorMessage(msg);
            setOpenDialog(true);
            throw msg;
          }
        });
      }
    );
  };

  function handleSave(newItemDefs: KubeObjectInterface[]) {
    let massagedNewItemDefs = newItemDefs;
    const cancelUrl = location.pathname;

    // check if all yaml objects are valid
    for (let i = 0; i < massagedNewItemDefs.length; i++) {
      if (massagedNewItemDefs[i].kind === 'List') {
        // flatten this List kind with the items that it has which is a list of valid k8s resources
        const deletedItem = massagedNewItemDefs.splice(i, 1);
        massagedNewItemDefs = massagedNewItemDefs.concat(deletedItem[0].items);
      }
      if (!massagedNewItemDefs[i].metadata?.name) {
        setErrorMessage(
          t(`translation|Invalid: One or more of resources doesn't have a name property`)
        );
        return;
      }
      if (!massagedNewItemDefs[i].kind) {
        setErrorMessage(t('translation|Invalid: Please set a kind to the resource'));
        return;
      }
    }
    // all resources name
    const resourceNames = massagedNewItemDefs.map(newItemDef => newItemDef.metadata.name);
    setOpenDialog(false);

    const clusterName = getCluster() || '';

    dispatch(
      clusterAction(() => applyFunc(massagedNewItemDefs, clusterName), {
        startMessage: t('translation|Applying {{ newItemName }}…', {
          newItemName: resourceNames.join(','),
        }),
        cancelledMessage: t('translation|Cancelled applying {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        successMessage: t('translation|Applied {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        errorMessage: t('translation|Failed to apply {{ newItemName }}.', {
          newItemName: resourceNames.join(','),
        }),
        cancelUrl,
      })
    );

    dispatchCreateEvent({
      status: EventStatus.CONFIRMED,
    });
  }
  const baseObject = resourceClass.getBaseObject ? resourceClass.getBaseObject() : {};
  const resourceName = resourceClass.kind;

  return (
    <AuthVisible item={resourceClass} authVerb="create">
      <ActionButton
        color="primary"
        description={t('translation|Create {{ resourceName }}', { resourceName })}
        icon={'mdi:plus-circle'}
        onClick={() => {
          setOpenDialog(true);
        }}
      />

      <EditorDialog
        item={baseObject}
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onSave={handleSave}
        saveLabel={t('translation|Apply')}
        errorMessage={errorMessage}
        onEditorChanged={() => setErrorMessage('')}
        title={t('translation|Create {{ resourceName }}', { resourceName })}
      />
    </AuthVisible>
  );
}
