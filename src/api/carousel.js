import service from '@/utils/request'
export function fetchAllCarousels(query) {
  return service.get('/get_all_carousels', {
    params: query
  })
}

// 获取文章具体内容，当点击编辑按钮时会触发
export function fetchCarouselContent(id) {
  return service.get('/get_carousel', {
    params: {
      'id': id
    }
  })
}
// 用于新建一条招聘
export function createCarousel(carousel) {
  console.log(carousel)
  return service.post('/add_carousel', carousel)
}
// 用于保存编辑的招聘信息
export function updateCarousel(carousel) {
  console.log(carousel)
  return service.post('/update_carousel', carousel)
}

// 设置招聘信息为发布状态
export function PublishCarousel(id) {
  return service.get('/publish_carousel', {
    params: {
      'id': id
    }
  })
}
// 设置招聘信息为草稿状态
export function DraftCarousel(id) {
  return service.get('/draft_carousel', {
    params: {
      'id': id
    }
  })
}
// 删除招聘信息
export function DeleteCarousel(id) {
  return service.get('/delete_carousel', {
    params: {
      'id': id
    }
  })
}
