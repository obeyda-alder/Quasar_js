export function toggleLeftDrawer(state) {
  state.drawer.isLeftDrawerOpen = !state.drawer.isLeftDrawerOpen
}
export function hideLeftDrawer(state) {
  state.drawer.isLeftDrawerOpen = false
}
