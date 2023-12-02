/**
 * useTodo
 *
 * @package hooks
 */
// useCallback, useMemo はどちらもキャッシュを利用し、不要な関数の生成を防ぐ
// useCallback は 親コンポーネントから子コンポーネントに渡すコールバック関数をメモ化するのに使う。
// https://zenn.dev/tsucchiiinoko/articles/8da862593a9980
import { useState, useCallback, useEffect } from 'react';
// import { useRouter } from 'next/router';
import { fetchTodoListApi, createTodoApi, updateTodoApi, deleteTodoApi } from '@/apis/todoApi';
// import { NAVIGATION_LIST } from '@/constants/navigations';
import { TodoType } from '@/interfaces/Todo';

/**
 * useTodo
 */
export const useTodo = () => {
  /* todoList */
  const [originTodoList, setOriginTodoList] = useState<Array<TodoType>>([]);
  // const router = useRouter();

  /* actions */

  /**
   * Todoリスト 取得処理
   */
  // useCallback でメモ化。不要な再取得を避ける
  const fetchTodoList = useCallback(async (): Promise<void> => {
    const data = await fetchTodoListApi();
    setOriginTodoList(typeof data === 'object' ? data : []);
  }, []);

  /**
   * Todo 新規登録処理
   * @param {string} title
   * @param {string} content
   */
  const createTodo = useCallback(
    async (title: string, content: string) => {
      const createdTodo = await createTodoApi(title, content);

      // データを再取得
      const data = await fetchTodoListApi();
      setOriginTodoList(typeof data === 'object' ? data : []);
      return createdTodo;
    },
    [originTodoList]
  );

  /**
   * Todo 更新処理
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = useCallback(
    async (id: number, title: string, content: string) => {
      const updatedTodo = await updateTodoApi(id, title, content);

      // データを再取得
      const data = await fetchTodoListApi();
      setOriginTodoList(typeof data === 'object' ? data : []);
      return updatedTodo;
    },
    [originTodoList]
  );

  /**
   * Todo削除処理
   * @param {number} id
   */
  const deleteTodo = useCallback(
    async (id: number) => {
      const deletedTodo = await deleteTodoApi(id);

      // データを再取得
      const data = await fetchTodoListApi();
      setOriginTodoList(typeof data === 'object' ? data : []);
      return deletedTodo;
    },
    [originTodoList]
  );

  // useEffect でコンポーネントがレンダリング後・再レンダリング後に非同期な処理を行う
  // または、fetchTodoList に変更があった際に実行される(第２引数に依存する)
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);

  return {
    createTodo,
    originTodoList,
    updateTodo,
    deleteTodo,
  };
};
