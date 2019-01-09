import * as React from 'react'
import './index.less'




interface IProps {
  className : string,     // 图片路径
  title?: string,      // 工具名称
  onClick?: () => void // 点击事件
}
interface IState {
  className: string,    // 图片路径
  title: string // 功能名称
}


export default class BaseToolItemNoneTip extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      className: this.props.className ? this.props.className : '',
      title : this.props.title ? this.props.title : ''
    }
  }

  componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.className !== this.props.className) {
      this.setState({
        className: nextProps.className
      })
    }
  }

  clickHandle = () => {
    if (this.props.onClick) {
      this.props.onClick()
    }
  }

  render() {
    const title = this.state.title!
    return (
      <div className='toolbarItem' onClick={this.clickHandle.bind(this)}>
        <div className={`toolbarImg ` + this.state.className}/>
        <div className='toolbarTitle'>{title}</div>
      </div>
    )
  }
}

