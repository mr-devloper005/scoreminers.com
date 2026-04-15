import type { TaskConfig, TaskKey } from '@/lib/site-config'

/** UI-only: surfaces shown in chrome (nav, footer, menus). Does not change routing or config. */
const UI_SURFACE_KEYS = new Set<TaskKey>(['image', 'profile'])

export function filterTasksForUiSurface(tasks: TaskConfig[]): TaskConfig[] {
  return tasks.filter((task) => task.enabled && UI_SURFACE_KEYS.has(task.key))
}

export function isUiSurfaceTaskKey(key: TaskKey): boolean {
  return UI_SURFACE_KEYS.has(key)
}
