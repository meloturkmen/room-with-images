var demo = {
    constructor: CreatePBRRoughScene,
    onload: function () {

        // Skybox texture for environmental lightning

        var reflectionTexture = new BABYLON.HDRCubeTexture(
            "https://raw.githubusercontent.com/mkaanztrk/tessthdr/main/snowy_hillside_1k.hdr",
            scene,
            128,
            false,
            true,
            false,
            true
        );

        var sky = scene.createDefaultSkybox(reflectionTexture, true, 1000, 0.5);


        // Camera settings

        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0.1, 0.52, 0.13), scene);
        camera.rotation.y = -3.1097575046864492
        camera.minZ = 0.01
        camera.inputs.clear();
        camera.inputs.addMouse();
        camera.attachControl(canvas);
        scene.activeCamera = camera
        
        let cursorPlane = scene.getMeshByName("imlec");
        cursorPlane.isVisible = false;

        //closing default rig lights

        for (let i = 0; i < scene.lights.length; i++) {
            if (scene.lights[i].name == "Directional Light.Rig") {
                scene.lights[i].intensity = 0;
            }
        }
    }
};
