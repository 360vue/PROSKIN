var APP_DATA = {
  "scenes": [
    {
      "id": "0-a",
      "name": "A",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.10462386010209634,
          "pitch": 0.1674009376505552,
          "rotation": 4.71238898038469,
          "target": "1-b"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-b",
      "name": "B",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -2.3617559914800736,
        "pitch": -0.03436903604985275,
        "fov": 1.397892632121691
      },
      "linkHotspots": [
        {
          "yaw": -2.6601839476113973,
          "pitch": 0.16905283769154344,
          "rotation": 0,
          "target": "0-a"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
