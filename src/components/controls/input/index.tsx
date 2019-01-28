import React from 'react'
import './input.styl'
interface InputProps {
   type: string,
   handlerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}
class Input extends React.Component<InputProps,any>{
  constructor(props: InputProps) {
    super(props)
  }
  render() {
    const {handlerChange,...otherProps} = this.props
    return (
      <input className= {'tk_input'} {...otherProps} onChange = {handlerChange}/>
    )
  }
}
export default Input