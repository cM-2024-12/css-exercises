import("globe.gl")
  .then(({ default: Globe }) => {
    Globe()(document.getElementById('world'))
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg');
  });
