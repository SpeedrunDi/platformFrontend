import React from 'react'
import { Link } from 'react-router-dom'
import './CourseModules.scss'

const CourseModules = ({ id, course, handleAddContent, handleAddModule, user }) => (
  <div className="course-modules">
    {course.modules.length > 0 &&
      course.modules.map((module, idx) => (
        <div key={module._id} className="course-modules-block">
          {idx === 0 && <h3 className="course-modules-block__structure">Структура курса</h3>}
          <p className="course-modules-block__title">{module.title}</p>
          {module.data.map(item => (
            <ul key={item._id} className="course-modules-block__items">
              <li key={item.id} className={`course-modules-block__item course-modules-block__item--${item.type}`}>
                <Link to={`/course/${id}/edit/${item.type}/${item._id}`} className="course-modules-block__item-title">
                  {item.type === 'test' ? (
                    <>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM8.748 17.148L4.44 12.84C3.972 12.372 3.972 11.616 4.44 11.148C4.908 10.68 5.664 10.68 6.132 11.148L9.6 14.604L17.856 6.348C18.324 5.88 19.08 5.88 19.548 6.348C20.016 6.816 20.016 7.572 19.548 8.04L10.44 17.148C9.984 17.616 9.216 17.616 8.748 17.148Z"
                          fill="#ADFA00"
                        />
                      </svg>
                    </>
                  ) : null}
                  {item.type === 'task' ? (
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M0 15.4601V18.5001C0 18.7801 0.22 19.0001 0.5 19.0001H3.54C3.67 19.0001 3.8 18.9501 3.89 18.8501L14.81 7.94006L11.06 4.19006L0.15 15.1001C0.0500001 15.2001 0 15.3201 0 15.4601ZM17.71 5.04006C18.1 4.65006 18.1 4.02006 17.71 3.63006L15.37 1.29006C14.98 0.900059 14.35 0.900059 13.96 1.29006L12.13 3.12006L15.88 6.87006L17.71 5.04006Z"
                        fill="#ADFA00"
                      />
                    </svg>
                  ) : null}
                  {item.type === 'lesson' ? (
                    <svg width="24" height="19.5" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M11.2266 0.465517C11.1234 0.479579 10.8609 0.517079 10.6406 0.554579C10.2234 0.624892 1.18125 3.3202 0.834375 3.47489C0.328125 3.70458 0 4.12177 0 4.53427C0.0046875 4.94208 0.328125 5.34989 0.820313 5.57489C1.22344 5.76239 10.2375 8.44833 10.7344 8.5327C11.3391 8.63114 12.6656 8.63114 13.275 8.52802C13.7672 8.44833 22.5844 5.82802 23.1094 5.6077C24.2953 5.11083 24.2813 3.92489 23.0859 3.43739C22.6406 3.25927 13.7813 0.624892 13.3734 0.549891C12.975 0.479579 11.6063 0.428017 11.2266 0.465517Z"
                        fill="#ADFA00"
                      />
                      <path
                        d="M22.0312 7.43132C21.7875 7.50632 21.4734 7.60007 21.3422 7.63757L21.0938 7.70789V9.97195V12.236L20.8969 12.3251C20.3297 12.5782 19.8703 13.0985 19.6875 13.6891C19.5984 13.9751 19.5938 14.1251 19.5938 15.8313C19.5938 17.2094 19.6125 17.7204 19.6594 17.8985C19.95 18.9907 21.0469 19.7126 22.1344 19.5251C23.025 19.3704 23.7281 18.7282 23.9297 17.8704C24.0188 17.4907 24.0328 14.2844 23.9484 13.8813C23.8219 13.2813 23.3484 12.6626 22.8 12.3813L22.5 12.2266L22.4906 9.76101L22.4766 7.30007L22.0312 7.43132Z"
                        fill="#ADFA00"
                      />
                      <path
                        d="M4.50941 9.35318C4.53285 10.6282 4.55629 10.736 4.86566 11.1485C5.8266 12.4235 8.94847 13.2251 12.5391 13.1266C15.5532 13.0422 17.911 12.4001 18.9188 11.3876C19.2328 11.0688 19.3828 10.8016 19.4532 10.4266C19.5141 10.0938 19.5141 8.21881 19.4532 8.21881C19.4297 8.21881 18.2391 8.57037 16.8188 8.99693C15.3938 9.42349 14.0344 9.81256 13.8047 9.85943C13.2188 9.98599 12.1782 10.0563 11.5313 10.0188C10.5282 9.96256 10.05 9.85006 7.26097 9.01568C5.80316 8.57506 4.58441 8.21881 4.5516 8.21881C4.50472 8.21881 4.49535 8.46724 4.50941 9.35318Z"
                        fill="#ADFA00"
                      />
                    </svg>
                  ) : null}
                  {item.title}
                </Link>
                <div className="course-modules-block__item-actions">
                  {user.role === 'teacher' ? (
                    <>
                      <button className="course-modules-block__item-edit">
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0.666667 8H11.3333C11.7 8 12 7.7 12 7.33333C12 6.96667 11.7 6.66667 11.3333 6.66667H0.666667C0.3 6.66667 0 6.96667 0 7.33333C0 7.7 0.3 8 0.666667 8ZM0.666667 4.66667H11.3333C11.7 4.66667 12 4.36667 12 4C12 3.63333 11.7 3.33333 11.3333 3.33333H0.666667C0.3 3.33333 0 3.63333 0 4C0 4.36667 0.3 4.66667 0.666667 4.66667ZM0 0.666667C0 1.03333 0.3 1.33333 0.666667 1.33333H11.3333C11.7 1.33333 12 1.03333 12 0.666667C12 0.3 11.7 0 11.3333 0H0.666667C0.3 0 0 0.3 0 0.666667Z"
                            fill="#D1D1D6"
                          />
                        </svg>
                      </button>
                      <button className="course-modules-block__item-remove">
                        <i>
                          <svg
                            width="12"
                            height="16"
                            viewBox="0 0 20 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.15273 0.0750122C7.42148 0.253137 6.82617 0.759387 6.41367 1.56095L6.1793 2.01564H4.65586C3.01992 2.01564 2.86523 2.03439 2.38711 2.26876C1.74492 2.58751 1.23867 3.2297 1.06992 3.94689C0.971484 4.35939 0.971484 5.53126 1.06992 5.71876C1.22461 6.01876 0.568359 6.00001 9.99961 6.00001C19.4309 6.00001 18.7746 6.01876 18.9293 5.71876C19.0277 5.53126 19.0277 4.35939 18.9293 3.94689C18.7605 3.2297 18.2543 2.58751 17.6121 2.26876C17.134 2.03439 16.9793 2.01564 15.3434 2.01564H13.8199L13.5855 1.56095C13.1684 0.750012 12.5777 0.24845 11.823 0.0703249C11.4059 -0.0281129 8.56523 -0.0234256 8.15273 0.0750122Z"
                              fill="#D1D1D6"
                            />
                            <path
                              d="M2.37678 7.01719C2.32053 7.02656 2.2174 7.10156 2.1424 7.17656L2.00647 7.31719V14.1469C2.00647 21.8719 1.97365 21.2297 2.39084 22.0781C2.57365 22.4531 2.68147 22.5938 3.03772 22.95C3.41272 23.3297 3.52053 23.4094 3.95178 23.6156C4.22365 23.7469 4.56115 23.8781 4.70178 23.9156C4.90803 23.9625 5.94397 23.9766 9.99865 23.9766C14.0533 23.9766 15.0893 23.9625 15.2955 23.9156C15.4362 23.8781 15.7737 23.7469 16.0455 23.6156C16.4768 23.4094 16.5846 23.3297 16.9596 22.95C17.3158 22.5938 17.4237 22.4531 17.6065 22.0781C18.0237 21.2297 17.9908 21.8719 17.9908 14.1469V7.3125L17.8362 7.1625L17.6862 7.00781L10.0783 7.00312C5.89709 6.99844 2.42834 7.00781 2.37678 7.01719ZM5.82678 8.14687C5.91584 8.23594 5.9674 8.34844 5.99084 8.48906C6.0049 8.60156 6.01428 11.3859 6.0049 14.6719C5.99084 20.3766 5.98615 20.6531 5.90647 20.775C5.72365 21.0469 5.27365 21.0469 5.09084 20.775C5.01115 20.6531 5.00647 20.3766 4.9924 14.6719C4.98303 11.3859 4.9924 8.60156 5.00647 8.48906C5.04865 8.19844 5.23615 8.01562 5.49865 8.01562C5.64865 8.01562 5.72365 8.04375 5.82678 8.14687ZM8.82678 8.14687C8.91584 8.23594 8.9674 8.34844 8.99084 8.48906C9.0049 8.60156 9.01428 11.3859 9.0049 14.6719C8.99084 20.3766 8.98615 20.6531 8.90647 20.775C8.72365 21.0469 8.27365 21.0469 8.09084 20.775C8.01115 20.6531 8.00646 20.3766 7.9924 14.6719C7.98303 11.3859 7.9924 8.60156 8.00646 8.48906C8.04865 8.19844 8.23615 8.01562 8.49865 8.01562C8.64865 8.01562 8.72365 8.04375 8.82678 8.14687ZM11.8268 8.14687C11.9158 8.23594 11.9674 8.34844 11.9908 8.48906C12.0049 8.60156 12.0143 11.3859 12.0049 14.6719C11.9908 20.3766 11.9862 20.6531 11.9065 20.775C11.7237 21.0469 11.2737 21.0469 11.0908 20.775C11.0112 20.6531 11.0065 20.3766 10.9924 14.6719C10.983 11.3859 10.9924 8.60156 11.0065 8.48906C11.0487 8.19844 11.2362 8.01562 11.4987 8.01562C11.6487 8.01562 11.7237 8.04375 11.8268 8.14687ZM14.8268 8.14687C14.9158 8.23594 14.9674 8.34844 14.9908 8.48906C15.0049 8.60156 15.0143 11.3859 15.0049 14.6719C14.9908 20.3766 14.9862 20.6531 14.9065 20.775C14.7237 21.0469 14.2737 21.0469 14.0908 20.775C14.0112 20.6531 14.0065 20.3766 13.9924 14.6719C13.983 11.3859 13.9924 8.60156 14.0065 8.48906C14.0487 8.19844 14.2362 8.01562 14.4987 8.01562C14.6487 8.01562 14.7237 8.04375 14.8268 8.14687Z"
                              fill="#D1D1D6"
                            />
                          </svg>
                        </i>
                      </button>
                    </>
                  ) : null}
                </div>
              </li>
            </ul>
          ))}
          <button className="course-modules-block__add-item MainButton" onClick={() => handleAddContent(module._id)}>
            + Занятие
          </button>
        </div>
      ))}
    <button className="course-modules__add-module MainButton" onClick={handleAddModule}>
      + Модуль
    </button>
  </div>
)

export default CourseModules
