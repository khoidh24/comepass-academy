import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

//* Declare Array Object (Will be replaced with JSON API)
const COURSES = [
  {
    categoryLabel: 'New',
    courses: [
      {
        courseName: 'Sample Course 1',
        key: 'sample-course-1',
        courseLink: '#',
        couseImage: '/course1.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 2',
        key: 'sample-course-2',
        courseLink: '#',
        couseImage: '/course2.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 3',
        key: 'sample-course-3',
        courseLink: '#',
        couseImage: '/course3.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 4',
        key: 'sample-course-4',
        courseLink: '#',
        couseImage: '/course4.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 5',
        key: 'sample-course-5',
        courseLink: '#',
        couseImage: '/course5.png',
        author: 'Lorem Ipsum'
      }
    ]
  },
  {
    categoryLabel: 'For Beginners',
    courses: [
      {
        courseName: 'Sample Course 1',
        key: 'sample-course-1',
        courseLink: '#',
        couseImage: '/course1.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 2',
        key: 'sample-course-2',
        courseLink: '#',
        couseImage: '/course2.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 3',
        key: 'sample-course-3',
        courseLink: '#',
        couseImage: '/course3.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 4',
        key: 'sample-course-4',
        courseLink: '#',
        couseImage: '/course4.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 5',
        key: 'sample-course-5',
        courseLink: '#',
        couseImage: '/course5.png',
        author: 'Lorem Ipsum'
      }
    ]
  },
  {
    categoryLabel: 'Advanced Courses',
    courses: [
      {
        courseName: 'Sample Course 1',
        key: 'sample-course-1',
        courseLink: '#',
        couseImage: '/course1.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 2',
        key: 'sample-course-2',
        courseLink: '#',
        couseImage: '/course2.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 3',
        key: 'sample-course-3',
        courseLink: '#',
        couseImage: '/course3.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 4',
        key: 'sample-course-4',
        courseLink: '#',
        couseImage: '/course4.png',
        author: 'Lorem Ipsum'
      },
      {
        courseName: 'Sample Course 5',
        key: 'sample-course-5',
        courseLink: '#',
        couseImage: '/course5.png',
        author: 'Lorem Ipsum'
      }
    ]
  }
]

const Courses = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='container'>
          {COURSES.map((course) => (
            <div className='category mt-10 mb-10' key={course.categoryLabel}>
              <h1 className='my-8 text-2xl inline-block mr-5'>{course.categoryLabel}</h1>
              <Link href='#' className='text-sm text-indigo-600'>
                See more...
              </Link>
              <div className='scroll__menu overflow-auto whitespace-nowrap pb-10'>
                {course.courses.map((courseItem) => (
                  <div
                    className='course inline-block mr-10 ml-5 rounded-xl shadow-lg pb-5'
                    key={courseItem.courseName}
                  >
                    <Link href={courseItem.courseLink}>
                      <Image
                        src={courseItem.couseImage}
                        alt={courseItem.key}
                        width={320}
                        height={200}
                        priority
                        className='rounded-t-xl'
                      />
                    </Link>
                    <h2 className='mt-5 mb-2 ml-2'>{courseItem.courseName}</h2>
                    <p className='ml-2 text-gray-600 text-sm'>By {courseItem.author}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Courses
