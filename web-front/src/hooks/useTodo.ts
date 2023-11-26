/**
 * useTodo
 *
 * @package hooks
 */
// useCallback, useMemo はどちらもキャッシュを利用し、不要な関数の生成を防ぐ
// useCallback は 親コンポーネントから子コンポーネントに渡すコールバック関数をメモ化するのに使う。
// https://zenn.dev/tsucchiiinoko/articles/8da862593a9980
import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { INIT_TODO_LIST } from '@/constants/data'
import { NAVIGATION_LIST } from '@/constants/navigations'

/**
 * useTodo
 */
export const useTodo = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST)
  const router = useRouter()

  /**
   * Todo 新規登録処理
   * @param {string} title
   * @param {string} content
   */
  const addTodo = useCallback(
    (title: string, content: string) => {
      const newId = originTodoList.length + 1
      const newTodoList = [
        ...originTodoList,
        {
          id: newId,
          title: title,
          content: content,
        },
      ]
      setOriginTodoList(newTodoList)
      router.push(NAVIGATION_LIST.TOP)
    },
    [originTodoList]
  )

  /**
   * 更新処理
   * @param {number} id
   * @param {string} title
   * @param {string} content
   */
  const updateTodo = useCallback(
    (id: number, title: string, content: string) => {
      const newTodos = originTodoList.map((todo) => {
        if (todo.id === id) {
          return { id: id, title: title, content: content }
        }
        return todo
      })
      setOriginTodoList(newTodos)
      router.push(NAVIGATION_LIST.TOP)
    },
    [originTodoList]
  )

  /**
   * Todo削除処理
   * @param {number} id
   */
  const deleteTodo = (id: number) => {
    const newTodos = originTodoList.filter((todo) => {
      return todo.id !== id
    })
    setOriginTodoList(newTodos)
  }

  return {
    addTodo,
    originTodoList,
    updateTodo,
    deleteTodo,
  }
}
