<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Image Gallery</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>Image Gallery</h1>

  <div class="filter-buttons">
    <button onclick="filterImages('all')">All</button>
    <button onclick="filterImages('nature')">Nature</button>
    <button onclick="filterImages('city')">City</button>
  </div>

  <div class="gallery">
    <div class="gallery-item nature"><img src="     https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=    " alt="Nature 1"></div>
    <div class="gallery-item city"><img src="https://i.pinimg.com/564x/d2/9e/09/d29e095e3781b4f5c7c888ea8dd98d0c.jpg" alt="City 1"></div>
    <div class="gallery-item nature"><img src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=" alt="Nature 2"></div>
    <div class="gallery-item city"><img src="https://media.istockphoto.com/id/1325342016/photo/mumbai-skyline-wadala-sewri-lalbaug.jpg?s=612x612&w=0&k=20&c=Zu7P_lttSwIU5rLJFdPmhXW4Hy-C64bAhxA7V28LvJQ=" alt="City 2"></div>
  </div>

  <div class="lightbox" id="lightbox">
    <button id="prev">❮</button>
    <img src="" alt="Preview" id="lightbox-img">
    <button id="next">❯</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
