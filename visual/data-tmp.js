var visualdata = [
  {
    "data": {
      "id": "testSTART",
      "model": "testSTART"
    },
    "position": {
      "x": 50,
      "y": 50
    },
    "classes": "start-node"
  },
  {
    "data": {
      "id": "noxious-roof",
      "model": "AcceptRobot"
    }
  },
  {
    "data": {
      "id": "thick-bedroom",
      "source": "testSTART",
      "target": "noxious-roof"
    }
  },
  {
    "data": {
      "id": "salty-clocks",
      "model": "BoxValidationRobot"
    }
  },
  {
    "data": {
      "id": "calculating-brick",
      "source": "noxious-roof",
      "target": "salty-clocks"
    }
  },
  {
    "data": {
      "id": "onerous-mist",
      "model": "BranchRobot"
    }
  },
  {
    "data": {
      "id": "industrious-expert",
      "source": "salty-clocks",
      "target": "onerous-mist"
    }
  },
  {
    "data": {
      "id": "material-window",
      "model": "AcceptRobot"
    }
  },
  {
    "data": {
      "id": "classy-market",
      "source": "onerous-mist",
      "target": "material-window"
    }
  },
  {
    "data": {
      "id": "absent-snake",
      "model": "GeneralPurposeRobot"
    }
  },
  {
    "data": {
      "id": "unnatural-passenger",
      "source": "material-window",
      "target": "absent-snake"
    }
  },
  {
    "data": {
      "id": "victorious-mailbox",
      "source": "absent-snake",
      "target": "onerous-mist"
    }
  },
  {
    "data": {
      "id": "second-chicken",
      "model": "BoxValidationRobot"
    }
  },
  {
    "data": {
      "id": "awesome-recess",
      "source": "onerous-mist",
      "target": "second-chicken"
    }
  },
  {
    "data": {
      "id": "testEND",
      "model": "testEND"
    },
    "position": {
      "x": 50,
      "y": 650
    },
    "classes": "end-node"
  },
  {
    "data": {
      "id": "abundant-police",
      "source": "second-chicken",
      "target": "testEND"
    }
  }
]