import * as React from "react"

interface AppComponentProps {
  text: string,
  count: number
}

class Hello extends React.Component<AppComponentProps, {}> {
  constructor (props: AppComponentProps) {
    super(props)
  }
  render () {
    return (
      <div>react-ts
        <div>{this.props.text}</div>
        <div>{this.props.count}</div>
      </div>
    )
  }
}

export default Hello
