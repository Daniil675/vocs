import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import clsx from 'clsx'
import type { ReactNode } from 'react'

import { Link as Link_ } from './Link.js'
import * as styles from './NavigationMenu.css.js'

export const Root = (props: NavigationMenu.NavigationMenuProps) => (
  <NavigationMenu.Root {...props} className={clsx(props.className, styles.root)} />
)

export const List = (props: NavigationMenu.NavigationMenuListProps) => (
  <NavigationMenu.List {...props} className={clsx(props.className, styles.list)} />
)

export const Link = ({
  active,
  children,
  className,
  href,
}: {
  active?: boolean
  children: ReactNode
  className?: string
  href?: string
}) => (
  <NavigationMenu.Link asChild>
    <Link_
      data-active={active}
      className={clsx(className, styles.link)}
      href={href}
      variant="styleless"
    >
      {children}
    </Link_>
  </NavigationMenu.Link>
)

export const Item = (props: NavigationMenu.NavigationMenuItemProps) => (
  <NavigationMenu.Item {...props} className={clsx(props.className, styles.item)} />
)

export const Trigger = ({
  active,
  className,
  ...props
}: NavigationMenu.NavigationMenuTriggerProps & {
  active?: boolean
}) => (
  <NavigationMenu.Trigger
    {...props}
    data-active={active}
    className={clsx(className, styles.trigger)}
  />
)

export const Content = (props: NavigationMenu.NavigationMenuContentProps) => (
  <NavigationMenu.Content {...props} className={clsx(props.className, styles.content)} />
)
