"use client"
import React from 'react'
import styles from './adminPostForm.module.css'
import { addPost } from '../../lib/action'
import {useFormState} from 'react-dom'
const AdminPostForm = ({userId}) => {
  const [state , formAction] = useFormState(addPost,undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add new Post </h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="title of the article" />
      <input type="text" name="slug" placeholder="slug for the link" />
      <input type="text" name="img" placeholder="img link" />
      <textarea type="text" name="desc" placeholder="short description" rows={10} maxlength={100} />
      <textarea type="text" name="longdesc" placeholder="article post" rows={10} />
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminPostForm
