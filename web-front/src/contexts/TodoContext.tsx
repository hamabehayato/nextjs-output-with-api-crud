/**
 * TodoContext
 *
 * @package contexts
 */
import { useContext, createContext, ReactNode } from 'react'
import { useTodo } from '@/hooks/useTodo'
import { TodoType } from '@/interfaces/Todo'

type Props = {
  children: ReactNode
}

interface ContextInterface {
  addTodo: (title: string, content: string) => void
  originTodoList: Array<TodoType>
  updateTodo: (id: number, title: string, content: string) => void
  deleteTodo: (id: number) => void
}

/**
 * TodoContext
 */
const TodoContext = createContext({} as ContextInterface)

/**
 * TodoProvider
 * @param children
 * @constructor
 */
export const TodoProvider = ({ children }: Props) => {
  const { addTodo, originTodoList, updateTodo, deleteTodo } = useTodo()

  return (
    <TodoContext.Provider
      value={{
        addTodo,
        originTodoList,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => useContext(TodoContext)
