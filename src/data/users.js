import useSWR from 'swr';

const useUsers = () => {
  const { data, error } = useSWR('/api/users');

  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUsers;
