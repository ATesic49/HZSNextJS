import { useState, useRef } from 'react'
import Input from './Input'
import Button from './Button'
import { AiOutlineClose } from 'react-icons/ai'
import { BsFillImageFill } from 'react-icons/bs'
import { FaTrash } from 'react-icons/fa'

//PAZI NA LOZINKU MORA SE HASH-UJE U JWT-u!!!
//VERIFIKACIJA REGEX!!!
// Nije jos responzivno

function SignUpModal({ onClose, signIn }) {
  const [user, setUser] = useState({
    userName: '',
    password: '',
    email: '',
    date: '',
    profileImage: '',
  })

  const imageRef = useRef(null)

  const [validationErrors, setValidationErrors] = useState({
    userName: '',
    password: '',
    email: '',
    age: '',
  })
  //regex validators
  const userNameRegex = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  const ageRegex = /^(1[3-9]|[2-9]\d)$/ // Allows ages from 13 to 99

  // opciopnalno const imageFileRegex = /\.(jpg|jpeg|png|gif)$/i;
  function validateInput(name) {
    switch (name) {
      case 'userName':
        setValidationErrors(prevErrors => ({
          ...prevErrors,
          userName: userNameRegex.test(user.userName)
            ? ''
            : `Duzina korisnickog imena mora biti izmedju 3 i 20 karaktera.`,
        }))
        break
      case 'password':
        setValidationErrors(prevErrors => ({
          ...prevErrors,
          password: passwordRegex.test(user.password)
            ? ''
            : `Lozinka mora da ima bar jedno veliko i malo slovo, minimum 8 karaktera, broj i bar jedan specijalni karakter`,
        }))
        break
      case 'age':
        const birthdate = new Date(user.date)
        const today = new Date()
        const age = today.getFullYear() - birthdate.getFullYear()

        setValidationErrors(prevErrors => ({
          ...prevErrors,
          age: ageRegex.test(age) ? '' : 'Invalid age (13-99)',
        }))
        break
      case 'email':
        setValidationErrors(prevErrors => ({
          ...prevErrors,
          email: emailRegex.test(user.email) ? '' : 'Invalid email adress',
        }))
        break
      default:
        break
    }
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  function transformFile(event) {
    return new Promise((resolve, reject) => {
      const file = event.target.files[0]
      const reader = new FileReader()

      reader.onload = function () {
        const imageData = reader.result
        let finalImageData = base64ToUrl(imageData)
        resolve(finalImageData)
      }

      reader.onerror = function (error) {
        reject(error) // Reject the promise if there's an error
      }

      if (file) {
        reader.readAsDataURL(file)
      } else {
        reject(new Error('No file selected')) // Handle the case where no file is selected
      }
    })
  }

  function base64ToUrl(base64Image) {
    const byteCharacters = atob(base64Image.split(',')[1])
    const byteNumbers = new Array(byteCharacters.length)
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i)
    }
    const byteArray = new Uint8Array(byteNumbers)
    const blob = new Blob([byteArray], { type: 'image/png' })
    const imageUrl = URL.createObjectURL(blob)
    return imageUrl
  }

  function handleSubmit(event) {
    event.preventDefault()
    Object.entries(user).map(([name, attr]) => {
      validateInput(name)
    })
    //mutacija ide ovde
    if (Object.values(validationErrors).some(error => error !== '')) {
      // Handle validation errors (you may display an alert or any other logic)
      console.log('Form has validation errors')
      return
    }
    setUser({
      userName: '',
      password: '',
      email: '',
      age: '',
      profileImage: '',
    })
    onClose()
  }

  return (
    <div className="p-4 w-[50vw] top-[-2em] shadow text-white bg-gray-900 rounded-xl relative">
      <div className="flex mx-10  justify-between">
        <h1 className="text-3xl font-semibold"> Sign Up </h1>
        <Button onClick={onClose} className="rounded-full py-4">
          <AiOutlineClose className="text-l font-bold" />
        </Button>
      </div>
      <form
        className="flex h-auto gap-2  flex-col align-middle justify-center mx-10 mb-10"
        onSubmit={handleSubmit}
      >
        <Input
          heading={'User Name:'}
          placeholder={'Enter your user name...'}
          type={'text'}
          name={'userName'}
          value={user.userName}
          onChange={handleInputChange}
          validationError={validationErrors.userName}
          required
        />
        <Input
          heading={'Password:'}
          placeholder={'Enter your password...'}
          type={'password'}
          name={'password'}
          value={user.password}
          onChange={handleInputChange}
          validationError={validationErrors.password}
          required
        />
        <Input
          heading={'Email:'}
          placeholder={'Enter your email...'}
          type={'email'}
          name={'email'}
          value={user.email}
          onChange={handleInputChange}
          validationError={validationErrors.email}
          required
        />
        <Input
          heading={'Date:'}
          placeholder={'Enter your Birthdate...'}
          type={'date'}
          name={'date'}
          value={user.date}
          onChange={handleInputChange}
          validationError={validationErrors.age}
          required
        />
        <h2 className="text-l  ">Profile Image:</h2>
        <div className="flex flex-col justify-start">
          <div className="flex justify-start w-[100px] text-black items-center gap-3">
            {user.profileImage && (
              <img src={user.profileImage} alt="Image Preview" className="" />
            )}
          </div>
          <div className="flex items-left gap-3">
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              ref={imageRef}
              onChange={transformFile}
            />
            <Button
              className="h-11  w-[220px] text-center flex justify-center 
              items-center align-middle px-6 py-3 
              after:absolute relative  after:aspect-square after:top-[-1em] after:rounded-[100%] after:left-[50%]
              duration-500 z-[1]
              hover:text-gray-900
              text-white after:z-[-1] 
              after:overflow-visible after:bg-white after:translate-x-[-50%]
              save hover:after:top-[50%] hover:after:translate-y-[-50%] after:duration-500
              
              "
              onClick={e => {
                e.preventDefault()
                imageRef.current.click()
              }}
            >
              <BsFillImageFill className="text-l mr-2" />
              <span className="text-l">Upload an image</span>
            </Button>
            <div className="absolute w-full flex justify-left bottom-20">
              <h2 className="py-3 px-2"> Already have an account? </h2>
              <Button
                className="bold hover:border-b-2 py-1 px-0"
                onClick={e => {
                  e.preventDefault()
                  signIn()
                }}
              >
                Sign in!
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-4 flex relative bottom-[-25px] justify-between ">
          <Button
            onClick={handleSubmit}
            className="px-6 py-3 flex justify-center
            after:absolute relative  after:aspect-square after:top-[-1em] after:rounded-[100%] after:left-[50%]
            duration-500 z-[1]
            hover:text-gray-900
            text-white after:z-[-1] 
             after:overflow-visible after:bg-white after:translate-x-[-50%]
            save hover:after:top-[50%] hover:after:translate-y-[-50%] after:duration-500
            "
            type="submit"
          >
            Save
          </Button>
          <Button
            className="w-1/6 px-20 relative py-0 flex justify-center  border  after:absolute after:top-[50%] after:left-[50%] after:translate-x-[-50%] after:translate-y-[-50%] hover:after:bg-white after:w-1/12 after:aspect-square after:rounded-[100%] duration-500 hover:after:w-[150%]  hover:text-gray-900 overflow-hidden after:duration-500 z-[1] after:z-[-1] "
            type="submit"
            onClick={onClose}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignUpModal
