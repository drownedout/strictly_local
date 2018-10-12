import React, {Component} from 'react'

export default class FileUpload extends Component{
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChange = async (e) => {
    const { input } = this.props
    const targetFile = e.target.files[0]
    if (targetFile) {
      const val = await this.getBase64(targetFile)
      input.onChange(val)
    } else {
      input.onChange(null)
    }
  }

  render() {
    const { input: { value } } = this.props
    const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
    return(
      <div>
        <label>{label}</label>
          <div>
        <input
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
        />
        </div>
      </div>
    )
  }
}
