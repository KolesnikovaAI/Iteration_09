//шаблон функционального компонента создается командой rfc

import React from 'react'

export default function Fcomponent(props) {
  return (
    <div>
      <h1>Func component. Hello, {props.name}!</h1>{/*props-объект, ключи которого-атрибуты компонента(тега)*/}
    </div>
  )
}
