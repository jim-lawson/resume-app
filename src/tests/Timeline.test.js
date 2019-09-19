import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Timeline from '../components/Timeline'

console.warn = jest.fn()
console.error = jest.fn()

afterEach(() => {
  cleanup()
  console.warn.mockClear()
  console.error.mockClear()
})

test('<Timeline /> should throw an error if no props are provided', () => {
  render(<Timeline />)
  expect(console.error).toHaveBeenCalled()
})

test('<Timeline /> should throw an error if any label is not provided', () => {
  render(<Timeline data={[{ startDate: new Date(), endDate: new Date() }]} />)
  expect(console.error).toHaveBeenCalled()
})

test('<Timeline /> should throw an error if any startDate is not provided', () => {
  render(<Timeline data={[{ label: 'foo', endDate: new Date() }]} />)
  expect(console.error).toHaveBeenCalled()
})

test('<Timeline /> should throw an error if any endDate is not provided', () => {
  render(<Timeline data={[{ label: 'foo', startDate: new Date() }]} />)
  expect(console.error).toHaveBeenCalled()
})

test('<Timeline /> should warn if data is empty', () => {
  const renderedComponent = render(<Timeline data={[]} />)
  expect(console.warn).toHaveBeenCalled()
  expect(renderedComponent.container.children.length).toEqual(0)
})

test('<Timeline /> should warn if first start date is missing', () => {
  const renderedComponent = render(
    <Timeline data={[{ label: 'foo', endDate: new Date() }]} />
  )
  expect(console.warn).toHaveBeenCalled()
  expect(renderedComponent.container.children.length).toEqual(0)
})

test('<Timeline /> should warn if last end date is missing', () => {
  const renderedComponent = render(
    <Timeline data={[{ label: 'foo', startDate: new Date() }]} />
  )
  expect(console.warn).toHaveBeenCalled()
  expect(renderedComponent.container.children.length).toEqual(0)
})

test('<Timeline /> should warn if an event partially overlaps another event', () => {
  const renderedComponent = render(
    <Timeline
      data={[
        {
          label: 'Event 1',
          startDate: new Date(1990, 0, 1),
          endDate: new Date(1991, 5, 1)
        },
        {
          label: 'Event 2',
          startDate: new Date(1990, 5, 1),
          endDate: new Date(1992, 0, 1)
        }
      ]}
    />
  )

  expect(console.warn).toHaveBeenCalled()
  expect(renderedComponent.container.children.length).toEqual(0)
})

test('<Timeline /> should warn if an event completely overlaps another event', () => {
  const renderedComponent = render(
    <Timeline
      data={[
        {
          label: 'Event 1',
          startDate: new Date(1990, 0, 1),
          endDate: new Date(1995, 5, 1)
        },
        {
          label: 'Event 2',
          startDate: new Date(1990, 5, 1),
          endDate: new Date(1992, 0, 1)
        }
      ]}
    />
  )

  expect(console.warn).toHaveBeenCalled()
  expect(renderedComponent.container.children.length).toEqual(0)
})

test('<Timeline /> should render as expected with a short time span', () => {
  const renderedComponent = render(
    <Timeline
      data={[
        {
          label: 'Event 1',
          startDate: new Date(1990, 0, 1),
          endDate: new Date(1990, 5, 1)
        },
        {
          label: 'Event 2',
          startDate: new Date(1990, 5, 1),
          endDate: new Date(1992, 0, 1)
        },
        {
          label: 'Event 3',
          startDate: new Date(1992, 0, 1),
          endDate: new Date(1993, 5, 1)
        },
        {
          label: 'Event 4',
          startDate: new Date(1993, 11, 1),
          endDate: new Date(1995, 0, 1)
        },
        {
          label: 'Event 5',
          startDate: new Date(1995, 11, 1),
          endDate: new Date(1998, 0, 1)
        }
      ]}
      containerWidth={800}
    />
  )

  expect(console.error).not.toHaveBeenCalled()
  expect(console.warn).not.toHaveBeenCalled()

  expect(renderedComponent.container.firstChild).toMatchSnapshot()
})

test('<Timeline /> should render as expected with a medium time span', () => {
  const renderedComponent = render(
    <Timeline
      data={[
        {
          label: 'Event 1',
          startDate: new Date(1990, 0, 1),
          endDate: new Date(1991, 5, 1)
        },
        {
          label: 'Event 2',
          startDate: new Date(1991, 5, 1),
          endDate: new Date(1994, 0, 1)
        },
        {
          label: 'Event 3',
          startDate: new Date(1994, 0, 1),
          endDate: new Date(1997, 5, 1)
        },
        {
          label: 'Event 4',
          startDate: new Date(1997, 11, 1),
          endDate: new Date(2002, 0, 1)
        },
        {
          label: 'Event 5',
          startDate: new Date(2002, 11, 1),
          endDate: new Date(2004, 0, 1)
        }
      ]}
    />
  )

  expect(console.error).not.toHaveBeenCalled()
  expect(console.warn).not.toHaveBeenCalled()

  expect(renderedComponent.container.firstChild).toMatchSnapshot()
})

test('<Timeline /> should render as expected with a long time span', () => {
  const renderedComponent = render(
    <Timeline
      data={[
        {
          label: 'Event 1',
          startDate: new Date(1990, 0, 1),
          endDate: new Date(1995, 5, 1)
        },
        {
          label: 'Event 2',
          startDate: new Date(1995, 5, 1),
          endDate: new Date(2001, 0, 1)
        },
        {
          label: 'Event 3',
          startDate: new Date(2001, 0, 1),
          endDate: new Date(2006, 5, 1)
        },
        {
          label: 'Event 4',
          startDate: new Date(2006, 11, 1),
          endDate: new Date(2014, 0, 1)
        },
        {
          label: 'Event 5',
          startDate: new Date(2014, 11, 1),
          endDate: new Date(2021, 0, 1)
        }
      ]}
    />
  )

  expect(console.error).not.toHaveBeenCalled()
  expect(console.warn).not.toHaveBeenCalled()

  expect(renderedComponent.container.firstChild).toMatchSnapshot()
})
