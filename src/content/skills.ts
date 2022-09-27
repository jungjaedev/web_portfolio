interface ItemProps {
  title: string;
  imageList: string[];
}

export const skillsList : {[key: string] : ItemProps}  = {
  Frontend : {
    title: "Frontend",
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/b4c659e1-6d5e-4c4f-9177-90f0759e6a87/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/17e22882-fe45-4c8a-b193-2c031dbdd9ee/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/47170257-ce64-4db1-9316-64a80c9ed189/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/0478c773-4f9f-4ac2-a52b-d2603ee576d7/image.png'
    ]
  },
  Backend : {
    title: "Backend",
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/c0afe740-83d4-4f4a-bcd9-4f4325dadc55/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/5aab9239-6cc8-4ed9-83c5-3d56ab8c4ebc/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/4507d9d8-52c1-4934-a6ab-00a0b3163ad6/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/1eda0e35-98ea-4b82-8394-c70e590ad5db/image.png'
    ]
  },
  Etc: {
    title: "Etc",
    imageList: [
      'https://velog.velcdn.com/images/jungjaedev/post/559bee4e-f979-4058-832f-5bf1873ebab3/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/3d317c69-def7-4307-ad50-142822d41830/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/9b8b5e8f-a350-4890-a373-b0120f78e5bc/image.png',
      'https://velog.velcdn.com/images/jungjaedev/post/2a542592-9c1d-4e6c-82d9-d2e3b454b429/image.png'
    ]
  }
}