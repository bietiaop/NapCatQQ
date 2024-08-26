import { OB11Group } from '../../types';
import { OB11Constructor } from '@/onebot/helper/converter';
import BaseAction from '../BaseAction';
import { ActionName } from '../types';
import { FromSchema, JSONSchema } from 'json-schema-to-ts';

const SchemaData = {
    type: 'object',
    properties: {
        group_id: { type: ['number', 'string'] },
    },
    required: ['group_id'],
} as const satisfies JSONSchema;

type Payload = FromSchema<typeof SchemaData>;

class GetGroupInfo extends BaseAction<Payload, OB11Group> {
    actionName = ActionName.GetGroupInfo;
    payloadSchema = SchemaData;

    async _handle(payload: Payload) {
        const NTQQGroupApi = this.core.apis.GroupApi;
        const group = (await NTQQGroupApi.getGroups()).find(e => e.groupCode == payload.group_id.toString());
        if (!group) throw `群${payload.group_id}不存在`;
        return OB11Constructor.group(group);
    }
}

export default GetGroupInfo;
