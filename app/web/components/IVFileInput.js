import React, { Component } from 'react'

class IVFileInput extends Component {

  render() {
    return (
      <input type="file" accept=".png,.jpeg,.jpg" onChange={e => {

        const files = e.target.files
        console.log(files)


        if (files.length > 0) {

          const fileExtension = files[0].name.split('.').pop()

          if(!["png", "jpeg", "jpg"].includes(fileExtension)) {
            alert('File format not supported. Upload a png or jpeg/jpg.')
            e.target.value = null
          } else if (files[0].size > 128 * 1024) {
            alert('This file is too large. Try uploading a file under 128KB.')
            e.target.value = null
          } else {
            this.props.onValue(files[0])
          }

        }

      }}/>
    )
  }

}

export default IVFileInput
