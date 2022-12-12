import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { inputChangeHandler, submitFormHandler } from '../../UI/Form/Handlers/Handlers'
import { createTestRequest } from '../../../store/actions/testsActions'
import Modal from '../../UI/Modal2/Modal'
import FormInput from '../../UI/Form/FormInput/FormInput'
import MainButton from '../../UI/MainButton/MainButton'
import test from '../../../assets/icons/test.svg'
import './CreateTestModal.scss'

const CreateTestModal = ({ setOpen, courseId, moduleId, setModalType }) => {
  const dispatch = useDispatch()
  const [testData, setTestData] = useState({
    title: '',
    correct: 0,
    random: false,
    count: 0,
  })

  const [isChecked, setIsChecked] = useState(true)

  const handleOnChangeChecked = () => {
    setIsChecked(!isChecked)
    setTestData({ ...testData, random: isChecked })
  }

  const handlerClick = e => {
    submitFormHandler(e, dispatch(createTestRequest({ courseId, moduleId, testData })))
    setOpen(false)
    setTestData({ title: '', correct: 0, random: false, count: 0 })
  }

  return (
    <Modal setOpen={setOpen}>
      <div className="content">
        <img src={test} alt="test" className="content__test__img" />
        <span className="content__test__title">Настройте тест</span>
        <div className="content__test">
          <form>
            <span className="content__test__label">Название теста</span>
            <FormInput
              onChange={e => inputChangeHandler(e, setTestData)}
              value={testData.title}
              name="title"
              placeholder="Название"
              className="inputModal"
            />
            <span className="content__test__label">Процент правильных ответов для выполнения</span>
            <FormInput
              onChange={e => inputChangeHandler(e, setTestData)}
              type="number"
              value={testData.correct}
              name="correct"
              placeholder="0"
              className="inputModal"
            />
            <div className="content__test__checkbox">
              <FormInput onChange={handleOnChangeChecked} type="checkbox" name="random" />
              <span>Случайный порядок вопросов</span>
            </div>
            <span className="content__test__subtitle">Вопросы будут задаваться в случайном порядке</span>
            <div className="content__test__count">
              <span className="content__test__label">Количество попыток</span>
              <FormInput
                onChange={e => inputChangeHandler(e, setTestData)}
                type="number"
                value={testData.count}
                name="count"
                placeholder="0"
                className="inputModal content__test__input"
              />
            </div>
            <span className="content__test__subtitle">Добавьте описание</span>
            <div className="content__test__button-block">
              <MainButton
                className="WhiteButton content__btn"
                text="Назад"
                type="button"
                onClick={() => setModalType('content')}
              />
              <MainButton
                className="GreenButton content__btn-two"
                text="Создать тест"
                onClick={e => handlerClick(e)}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

export default CreateTestModal