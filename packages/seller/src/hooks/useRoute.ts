import {
  generatePath as routerGeneratePath,
  useNavigate,
} from 'react-router-dom';

type Params = {
  params?: Record<string, string>;
  query?: Record<string, string>;
};

type Options = Params & {
  state?: Record<string, unknown>;
  replace?: boolean;
};

export const useRoute = (route: string, params?: Params) => {
  const navigate = useNavigate();

  const path = generatePath(route, params?.params, params?.query);

  function open(options: Options = {}) {
    if (options.params || options.query) {
      navigate(generatePath(route, options.params, options.query), {
        state: options.state,
        replace: options.replace,
      });
    } else {
      navigate(path, { state: options.state, replace: options.replace });
    }
  }

  return {
    route: path,
    open,
  };
};

function generatePath(
  route: string,
  params: Params['params'],
  query: Params['query'],
) {
  if (query) {
    return `${routerGeneratePath(route, params)}?${generatePathQuery(query)}`;
  }
  return routerGeneratePath(route, params);
}

function generatePathQuery(query: NonNullable<Params['query']>) {
  return Object.keys(query).reduce((queryString, key) => {
    return queryString
      ? `${queryString}&${key}=${query[key]}`
      : `${key}=${query[key]}`;
  }, '');
}
