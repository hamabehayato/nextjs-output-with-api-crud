/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */
import { useState, useCallback } from 'react'
import { EventType } from '@/interfaces/Event'

type Params = {
  addTodo: (title: string, content: string) => void
}

type StatesType = {
  inputTitle: string
  inputContent: string
}

type ActionsType = {
  handleChangeTitle: EventType['onChangeInput']
  handleChangeContent: EventType['onChangeTextArea']
  handleCreateTodo: EventType['onSubmit']
}

/**
 * useTodoCreateTemplate
 * @param addTodo
 * @returns {[{inputTitle: string, inputContent: string}
 * {handleCreateTodo: ((function(*): void)|*)
 * handleChangeContent: (function(*): void)
 * handleChangeTitle: (function(*): void)}]}
 */
export const useTodoCreateTemplate = ({ addTodo }: Params) => {
  /* local state */
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')

  /* actions */
  /**
   * title の更新処理
   * @param {*} e
   */
  const handleChangeTitle: EventType['onChangeInput'] = useCallback((e) => {
    setInputTitle(e.target.value)
  }, [])

  /**
   * content の更新処理
   * @param {*} e
   */
  const handleChangeContent: EventType['onChangeTextArea'] = useCallback((e) => {
    setInputContent(e.target.value)
  }, [])

  /**
   * Todo の新規登録処理
   * @type {function(*): void |*}
   */
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    (e) => {
      // e.preventDefault(): ブラウザデフォルトのform 送信機能を無効化
      e.preventDefault()
      if (inputTitle && inputContent) {
        addTodo(inputTitle, inputContent)
      }
    },
    // これらが更新された時のみ、関数を再生成する
    [addTodo, inputTitle, inputContent]
  )

  const states: StatesType = { inputTitle, inputContent }
  const actions: ActionsType = { handleChangeTitle, handleChangeContent, handleCreateTodo }

  return [states, actions] as const
}
