const leftBus = (fill, rotate) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Cpath fill='${fill}' transform='rotate(${rotate} 250 250)' d='M129.278 338.452c-2.583-.92-6.603-3.487-8.933-5.703-20.085-19.097-2.644-52.21 24.117-45.79 11.16 2.677 20.412 14.57 20.412 26.235 0 6.752-3.623 14.6-9.05 19.602-7.755 7.148-16.895 9.095-26.546 5.655zm17.513-16.303c2.83-2.832 3.543-4.604 3.543-8.82 0-2.902-.797-6.413-1.77-7.803-4.304-6.144-14.796-6.627-20.15-.926-2.284 2.43-2.92 4.433-2.92 9.176 0 5.144.515 6.51 3.398 8.99 5.094 4.38 13.182 4.102 17.9-.617zm187.347 16.326c-10.704-3.817-17.718-14.055-17.767-25.932-.033-8.09 2.382-13.284 9.017-19.4 16.893-15.572 44.22-3.32 44.22 19.823 0 18.413-18.354 31.613-35.47 25.51zm17.255-16.514c7.994-7.994 2.922-21.718-8.027-21.718-12.288 0-17.964 14.558-8.71 22.344 5.355 4.507 11.847 4.264 16.737-.626zm-301.955-.21c-3.945-2.995-4.528-8.105-4.528-39.72v-31.386l3.467-3.98 3.468-3.98 1.414-31.507c2.166-48.277 2.046-47.572 8.58-50.272 2.095-.865 60.556-1.164 184.828-.944l181.764.32 6.06 2.79c7.664 3.528 13.267 8.88 17.374 16.6l3.225 6.058V299.284l-38.776 11.984c-21.327 6.59-39.133 11.987-39.57 11.99-.437.004-.506-3.167-.154-7.048 1.87-20.616-13.667-37.78-34.197-37.78-8.51 0-16.355 3.477-23.127 10.25-7.868 7.867-10.77 15.765-9.88 26.875l.62 7.71H169.558l.917-2.726c1.74-5.17.785-15.99-1.916-21.738-9.88-21.015-35.93-26.357-53.462-10.963-7.184 6.306-10.206 13.837-10.206 25.428v9.994l-26.73.003c-19.516.002-27.27-.407-28.725-1.513zm45.234-19.127c2.266-1.212 2.345-3.116 2.345-56.105 0-41.045-.366-55.216-1.454-56.304-.895-.897-5.294-1.454-11.468-1.454-8.758 0-10.177.302-11.306 2.41-.872 1.632-1.18 19.894-.95 56.393.29 46.412.593 54.14 2.156 55.13 2.45 1.547 17.752 1.496 20.68-.07zm91.525-67.944c2.065-2.28 2.308-4.568 2.308-21.683 0-17.115-.243-19.403-2.308-21.685-2.238-2.472-3.308-2.55-34.752-2.55-27.336 0-32.73.288-34.275 1.832-2.685 2.684-3.585 11.152-2.915 27.417.857 20.8-2.204 19.222 37.29 19.222 31.342 0 32.415-.08 34.652-2.55zm83.567.833c2.168-1.585 2.353-3.325 2.353-22.23 0-15.6-.398-20.99-1.663-22.515-1.473-1.776-5.402-2.006-34.233-2.006-30.954 0-32.69.12-34.993 2.423-2.22 2.22-2.424 4.04-2.424 21.542 0 15.343.373 19.65 1.886 21.812 1.87 2.668 2.178 2.692 34.303 2.692 26.077 0 32.877-.336 34.77-1.72zm82.554-.916c2.708-2.544 2.804-3.308 2.804-22.348 0-19-.098-19.784-2.693-21.602-2.268-1.59-7.62-1.886-33.93-1.886-39.657 0-36.392-2.203-35.862 24.194.338 16.836.668 19.494 2.694 21.73 2.23 2.46 3.347 2.546 33.244 2.546 30.096 0 31.013-.07 33.742-2.635zm85.74-.058c2.862-4.086 2.69-31.483-.235-37.193-4.053-7.92-7.055-8.585-38.667-8.585H371.05l-2.512 3.193c-2.286 2.905-2.512 4.816-2.512 21.26 0 17.568.082 18.15 2.974 21.043l2.975 2.974h32.098c31.795 0 32.116-.025 33.984-2.693z'/%3E%3C/svg%3E`

const rightBus = (fill, rotate) => `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500'%3E%3Cpath fill='${fill}' transform='rotate(${rotate} 250 250)' d='M370.722 338.452c2.583-.92 6.603-3.487 8.933-5.703 20.085-19.097 2.644-52.21-24.117-45.79-11.16 2.677-20.412 14.57-20.412 26.235 0 6.752 3.623 14.6 9.05 19.602 7.755 7.148 16.895 9.095 26.546 5.655zM353.21 322.15c-2.83-2.832-3.543-4.604-3.543-8.82 0-2.902.797-6.413 1.77-7.803 4.304-6.144 14.796-6.627 20.15-.926 2.284 2.43 2.92 4.433 2.92 9.176 0 5.144-.515 6.51-3.398 8.99-5.094 4.38-13.182 4.102-17.9-.617zm-187.347 16.326c10.704-3.817 17.718-14.055 17.766-25.932.033-8.09-2.382-13.284-9.017-19.4-16.893-15.572-44.22-3.32-44.22 19.823 0 18.413 18.354 31.613 35.47 25.51zm-17.255-16.514c-7.994-7.994-2.922-21.718 8.027-21.718 12.288 0 17.964 14.558 8.71 22.344-5.355 4.507-11.847 4.264-16.737-.626zm301.955-.21c3.945-2.995 4.528-8.105 4.528-39.72v-31.386l-3.467-3.98-3.468-3.98-1.414-31.507c-2.166-48.277-2.046-47.572-8.58-50.272-2.095-.865-60.556-1.164-184.828-.944l-181.764.32-6.06 2.79c-7.664 3.528-13.267 8.88-17.374 16.6l-3.225 6.058V299.284l38.776 11.984c21.327 6.59 39.133 11.987 39.57 11.99.437.004.506-3.167.154-7.048-1.87-20.616 13.667-37.78 34.197-37.78 8.51 0 16.355 3.477 23.127 10.25 7.868 7.867 10.77 15.765 9.88 26.875l-.62 7.71h140.448l-.917-2.726c-1.74-5.17-.785-15.99 1.916-21.738 9.88-21.015 35.93-26.357 53.462-10.963 7.184 6.306 10.206 13.837 10.206 25.428v9.994l26.73.002c19.516.002 27.27-.406 28.725-1.512zm-45.234-19.127c-2.266-1.212-2.345-3.116-2.345-56.105 0-41.045.366-55.216 1.454-56.304.895-.897 5.294-1.454 11.468-1.454 8.758 0 10.177.302 11.306 2.41.872 1.632 1.18 19.894.95 56.393-.29 46.412-.593 54.14-2.156 55.13-2.45 1.547-17.752 1.496-20.68-.07zm-91.525-67.944c-2.065-2.28-2.308-4.568-2.308-21.683 0-17.115.243-19.403 2.308-21.685 2.238-2.472 3.308-2.55 34.752-2.55 27.336 0 32.73.288 34.275 1.832 2.685 2.684 3.585 11.152 2.915 27.417-.857 20.8 2.204 19.222-37.29 19.222-31.342 0-32.415-.08-34.652-2.55zm-83.567.833c-2.17-1.585-2.353-3.325-2.353-22.23 0-15.6.398-20.99 1.663-22.515 1.473-1.776 5.402-2.006 34.233-2.006 30.954 0 32.69.12 34.993 2.423 2.22 2.22 2.424 4.04 2.424 21.542 0 15.343-.373 19.65-1.886 21.812-1.87 2.668-2.178 2.692-34.303 2.692-26.077 0-32.877-.336-34.77-1.72zm-82.554-.916c-2.708-2.544-2.804-3.308-2.804-22.348 0-19 .098-19.784 2.693-21.602 2.268-1.59 7.62-1.886 33.93-1.886 39.657 0 36.392-2.203 35.862 24.194-.338 16.836-.668 19.494-2.694 21.73-2.23 2.46-3.347 2.546-33.244 2.546-30.096 0-31.013-.07-33.742-2.635zm-85.74-.058c-2.862-4.086-2.69-31.483.235-37.193 4.053-7.92 7.055-8.585 38.667-8.585h28.104l2.512 3.193c2.286 2.905 2.512 4.816 2.512 21.26 0 17.568-.082 18.15-2.974 21.043l-2.975 2.974H95.927c-31.795 0-32.116-.025-33.984-2.693z'/%3E%3C/svg%3E`

const busNumberColorMap = {
  4: 'red',
  704: 'hsl(23, 100%, 50%)',
}

// nextBus refers to the nextBus API
export default ({ rotation: nextBusRotation, busNumber } = {}) => {
  let mapsRotation = nextBusRotation + 90
  let path = leftBus
  if (mapsRotation > 90 && mapsRotation < 270) {
    path = rightBus
    mapsRotation += 180
  }

  const fillColor = busNumberColorMap[busNumber]

  // nextBusRotation:
  //   180
  // 90   270
  //    0
  // mapsRotation:
  //   90
  // 0   180
  //  270

  const size = 42
  return {
    url: path(fillColor, mapsRotation),
    size: new google.maps.Size(size, size),
    scaledSize: new google.maps.Size(size, size),
    anchor: new google.maps.Point(size / 2, size / 2),
  }
}
