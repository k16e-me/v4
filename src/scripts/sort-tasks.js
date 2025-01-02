import { statusOrder } from 'src/content.config'

export function _sortTasksByStatus(tasks) {
    return tasks.sort((a, b) => {
        const statusA = statusOrder.indexOf(a.data.status)
        const statusB = statusOrder.indexOf(b.data.status)
        return statusA - statusB
    })
}