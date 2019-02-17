import React from 'react'
import classnames from 'classnames';
import './input.scss'
interface InputProps {
   type: string,
   onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
   blur?: () => void,
   required?: boolean | string,
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
    console.log(value)
    value === ''? this.setState({
      error: true
    }): this.setState({
      error: false
    })
    this.props.blur && this.props.blur()
  }
  componentDidMount() {
    if (this.myRef) this.myRef.current.focus()
  }
  render() {
    const {onChange,blur, required,...otherProps} = this.props
    console.log(required)
    let cls = classnames('tk_input', {
      'error': this.state.error
    })
    return (
      <input className= {cls} {...otherProps} onBlur={this.blurBack.bind(this,'dd')} onChange = {onChange} ref={this.myRef}/>
    )
  }

}
export default Input