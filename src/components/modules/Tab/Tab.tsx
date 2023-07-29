import React from 'react'
import { useRouter } from 'next/router'
import Badge from '@/components/elements/Badge'
import {
  StyledBadgeTitle,
  StyledChevronRight,
  StyledTabItem,
  StyledTabWraper,
} from './tab-styling'

const badges = [
  {
    number: 1,
    title: 'delivery',
  },
  {
    number: 2,
    title: 'payment',
  },
  {
    number: 3,
    title: 'finish',
  },
]

const Badges = () => {
  const router = useRouter()

  return badges.map((badge) => (
    <>
      <StyledTabItem key={badge.number}>
        <Badge isactive={router.pathname === '/' + badge.title}>
          {badge.number}
        </Badge>
        <StyledBadgeTitle>{badge.title}</StyledBadgeTitle>
      </StyledTabItem>
      {badge.number < 3 && <StyledChevronRight />}
    </>
  ))
}

function Tab({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <StyledTabWraper {...props}>
      <Badges />
    </StyledTabWraper>
  )
}

export { Tab }
