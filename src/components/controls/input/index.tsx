import React from 'react'
import classnames from 'classnames';
import './input.scss'
interface InputProps {
   type: string,
   handlerChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
   handlerBlur: () => void
}
interface InputState {
  error: boolean
}
class Input extends React.Component<InputProps,InputState>{
  private myRef : any
  constructor(props: InputProps) {
    super(props)
    this.myRef = React.createRef()
    this.state = {
      error: false
    }
  }
  blurBack (msg: string,event: React.FocusEvent<HTMLInputElement>) {
    const value = (event.target as any).value
    console.log(msg)
    value === '' && this.setState({
      error: true
    })
    this.props.handlerBlur()
  }
  componentDidMount() {
    if (this.myRef) this.myRef.current.focus()
  }
  render() {
    const {handlerChange,handlerBlur,...otherProps} = this.props
    let cls = classnames('tk_input', {
      'error': this.state.error
    })
    return (
      <input className= {cls} {...otherProps} onBlur={this.blurBack.bind(this,'dd')} onChange = {handlerChange} ref={this.myRef}/>
    )
  }

}
export default Input