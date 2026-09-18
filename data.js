var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-de-reunio",
      "name": "Sala de Reunião",
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
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6765297653760278,
          "pitch": 0.8785710412537782,
          "rotation": 0,
          "target": "1-banheiro-01"
        },
        {
          "yaw": -0.05197677404274614,
          "pitch": 0.9574979908431853,
          "rotation": 0,
          "target": "2-escritrio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-banheiro-01",
      "name": "Banheiro 01",
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
          "yaw": -1.5587240881123918,
          "pitch": 0.7927017671701542,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-escritrio",
      "name": "Escritório",
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
          "yaw": -2.244001895211703,
          "pitch": 1.017294482101324,
          "rotation": 0,
          "target": "0-sala-de-reunio"
        },
        {
          "yaw": 2.289492347660442,
          "pitch": 0.6625030947975823,
          "rotation": 0,
          "target": "3-banheiro-02"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-banheiro-02",
      "name": "Banheiro 02",
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
          "yaw": -1.2094698707383067,
          "pitch": 0.3050089954941626,
          "rotation": 0,
          "target": "2-escritrio"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "escritorio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
