import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size, palette } from 'styled-theme'

import { Palette, MenuPalettes } from 'ui'


const PALLETES = [
  {
    id: 0,
    title: 'white summer',
    likes: 3,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#9e9e9e',
      },
      {
        id: '1',
        hash: '#d32f2f',
      },
      {
        id: '2',
        hash: '#1976d2',
      },
      {
        id: '3',
        hash: '#ffa000',
      },
    ],
  },
  {
    id: 1,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#ffa',
      },
      {
        id: '1',
        hash: '#d32f4f',
      },
      {
        id: '2',
        hash: '#1936d2',
      },
      {
        id: '3',
        hash: '#cfa421',
      },
    ],
  },
  {
    id: 2,
    title: 'worm summer',
    likes: 2,
    create_at: 'a mounth ago',
    colors: [
      {
        id: '0',
        hash: '#dcb5ff',
      },
      {
        id: '1',
        hash: '#d32f4f',
      },
      {
        id: '2',
        hash: '#b1d1c5',
      },
      {
        id: '3',
        hash: '#ff8000',
      },
    ],
  },
  {
    id: 3,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#ffa',
      },
      {
        id: '1',
        hash: '#cb9b42',
      },
      {
        id: '2',
        hash: '#1936d2',
      },
      {
        id: '3',
        hash: '#cfa421',
      },
    ],
  },
  {
    id: 4,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
  {
    id: 5,
    title: 'spring summer2',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
  {
    id: 6,
    title: 'summer3',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
  {
    id: 7,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
  {
    id: 8,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
  {
    id: 9,
    title: 'spring summer',
    likes: 2,
    create_at: 'a week ago',
    colors: [
      {
        id: '0',
        hash: '#005792',
      },
      {
        id: '1',
        hash: '#343434',
      },
      {
        id: '2',
        hash: '#73dbc4',
      },
      {
        id: '3',
        hash: '#7C4789',
      },
    ],
  },
]
const Wrapper = styled.main`
  background-color: #fff;
`
const Layout = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${size('maxWidth')};
  direction: rtl;
`

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  transition: 0.6s;
  margin-right: 240px;
  direction: ltr;
`

export const Palettes = ({ onSelect }) => (
  <Wrapper>
    <Layout>
      <Content>
        {
          PALLETES.map((colour) => (
            <Palette
              data={colour}
              key={colour.id}
              onSelect={onSelect}
            />
          ))
        }
      </Content>
      <MenuPalettes />
    </Layout>
  </Wrapper>
)
