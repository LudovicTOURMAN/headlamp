---
title: "Class: Job"
linkTitle: "Job"
slug: "lib_k8s_job.Job"
---

[lib/k8s/job](../modules/lib_k8s_job.md).Job

## Hierarchy

- `any`

  ↳ **`Job`**

## Constructors

### constructor

• **new Job**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`KubeJob`](../interfaces/lib_k8s_job.KubeJob.md) |

#### Inherited from

makeKubeObject<KubeJob\>('Job').constructor

#### Defined in

[lib/k8s/cluster.ts:76](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L76)

## Properties

### apiEndpoint

▪ `Static` **apiEndpoint**: `Object`

#### Index signature

▪ [other: `string`]: `any`

#### Defined in

[lib/k8s/job.ts:15](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/job.ts#L15)

___

### className

▪ `Static` **className**: `string`

#### Inherited from

makeKubeObject<KubeJob\>('Job').className

#### Defined in

[lib/k8s/cluster.ts:77](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L77)

## Accessors

### spec

• `get` **spec**(): `any`

#### Returns

`any`

#### Defined in

[lib/k8s/job.ts:17](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/job.ts#L17)

___

### status

• `get` **status**(): `any`

#### Returns

`any`

#### Defined in

[lib/k8s/job.ts:21](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/job.ts#L21)

## Methods

### apiList

▸ `Static` **apiList**(`onList`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubeJob\>('Job').apiList

#### Defined in

[lib/k8s/cluster.ts:60](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L60)

___

### getErrorMessage

▸ `Static` **getErrorMessage**(`err?`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `err?` | ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md) |

#### Returns

``null`` \| `string`

#### Inherited from

makeKubeObject<KubeJob\>('Job').getErrorMessage

#### Defined in

[lib/k8s/cluster.ts:75](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L75)

___

### useApiGet

▸ `Static` **useApiGet**(`onGet`, `name`, `namespace?`, `onError?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onGet` | (...`args`: `any`) => `void` |
| `name` | `string` |
| `namespace?` | `string` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |

#### Returns

`void`

#### Inherited from

makeKubeObject<KubeJob\>('Job').useApiGet

#### Defined in

[lib/k8s/cluster.ts:66](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L66)

___

### useApiList

▸ `Static` **useApiList**(`onList`, `onError?`, `opts?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `onList` | (`arg`: `any`[]) => `void` |
| `onError?` | (`err`: [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void` |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

`any`

#### Inherited from

makeKubeObject<KubeJob\>('Job').useApiList

#### Defined in

[lib/k8s/cluster.ts:61](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L61)

___

### useList

▸ `Static` **useList**(`opts?`): [`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`ApiListOptions`](../interfaces/lib_k8s_cluster.ApiListOptions.md) |

#### Returns

[`any`[], ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md), (`items`: `any`[]) => `void`, (`err`: ``null`` \| [`ApiError`](../interfaces/lib_k8s_apiProxy.ApiError.md)) => `void`]

#### Inherited from

makeKubeObject<KubeJob\>('Job').useList

#### Defined in

[lib/k8s/cluster.ts:72](https://github.com/kinvolk/headlamp/blob/490b989/frontend/src/lib/k8s/cluster.ts#L72)