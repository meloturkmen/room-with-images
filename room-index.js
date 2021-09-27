var CreatePBRRoughScene = function (engine) {


	var scene = new BABYLON.Scene(engine)



	BABYLON.SceneLoader.Append("assets/", "SampleScene.glb", scene, function () {

		scene.createDefaultCameraOrLight(true, true, true);
		var light = new BABYLON.HemisphericLight("Ambient Lighting", new BABYLON.Vector3(0, 1, 0))
		light.intensity = 2;
		light.groundColor = new BABYLON.Color3(0.5, 0.5, 0.5);

		for (let i = 0; i < scene.meshes.length; i++) {
			light.includedOnlyMeshes.push(scene.meshes[i]);

		}

	});



	return scene;
};