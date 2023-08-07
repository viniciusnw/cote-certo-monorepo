import { MutationUpdaterFn } from '@apollo/client';
import { DocumentNode } from 'graphql';

export const updateCache = <FragmentType, MutationData>(
  nameTypeEntityGraphQl: string,
  nameFieldsToUpdate: string[],
  fragment: DocumentNode,
): MutationUpdaterFn<MutationData> => (cache, { data }) => {
  if (!data) return;

  const result = Object.values(data)[0];
  if (!result?.id) return;

  const globalId = `${nameTypeEntityGraphQl}:${result.id}`;
  const objCache = cache.readFragment<FragmentType>({
    id: globalId,
    fragment,
  });

  const fieldsToUpdate: { [k: string]: any } = {};
  nameFieldsToUpdate.forEach(name => {
    fieldsToUpdate[name] = result[name];
  });

  if (objCache) {
    cache.writeFragment({
      id: globalId,
      fragment,
      data: {
        ...objCache,
        ...fieldsToUpdate,
      },
    });
  }
};
