//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Name: Pancake
// Author: Erwin Santacruz
// Date: 08.30.11
// Website: http://www.990adjustments.com /
// Email: hi@990adjustments.com
//
// Description:
// Simple script that creates project folders for you organized boys and girls with the
// option of creating a directory structure on disk.
//
// Legal Mumbo Jumbo:
// Copyright (c) 2009 Erwin Santacruz
// License: GPL http://www.gnu.org/licenses/gpl.txt
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
// OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
// OTHER DEALINGS IN THE SOFTWARE. IN OTHER WORDS, USE AT YOUR OWN RISK.
//
// Props: Thanks to Jeff Almasol whose code I was able to peruse and learn from..
//
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Hungry hungry...
{
	var fpath;
	var directoryTxtField;
	var pal;
	var doneText;
	
	// project file folder checkboxes
	var createOnDiskCb;
	var threeDCb;
	var footageCb;
	var stillsCb;
	var compsCb;
	var sourceCompsCb;
	var preCompsCb;
	var finalsCb;
	var audioCb;
	var illustratorCb;
	var photoshopCb;
	var cameraRawCb;
	var hdriCb;
	var imgSeqCb;
	var referenceCb;
	var selectAllCb;

	
	clearOutput();
	
	function createDirectoryStructure()
	{
    clearOutput();

    try {

      if (threeDCb.value) {
        //alert(threeDCb.value);
        var threeD= new Folder();
        threeD.changePath(fpath + "/3D");
        threeD.create();
      }

      if (footageCb.value) {
        var footage= new Folder();
        footage.changePath(fpath +"/FOOTAGE");
        footage.create();
      }

      if (stillsCb.value) {
        var stills = new Folder();
        stills.changePath(fpath + "/AE");
        stills.create();
      }
      /*
      if (compsCb.value) {
        var comps = new Folder();
        comps.changePath(fpath + "/COMPS");
        comps.create();
      }
      */
      if (finalsCb.value) {
        var finals = new Folder();
        finals.changePath(fpath + "/RENDERS");
        finals.create();
      }

      if (audioCb.value) {
        var audio = new Folder();
        audio.changePath(fpath + "/AUDIO");
        audio.create();
      }

      if (illustratorCb.value) {
        var illustrator = new Folder();
        illustrator.changePath(fpath + "/AI");
        illustrator.create();
      }

      if (photoshopCb.value) {
        var photoshop = new Folder();
        photoshop.changePath(fpath + "/PS");
        photoshop.create();
      }

      if (cameraRawCb.value) {
        var cameraRaw = new Folder();
        cameraRaw.changePath(fpath + "/C4D");
        cameraRaw.create();
      }

      if (hdriCb.value) {
        var hdri = new Folder();
        hdri.changePath(fpath + "/BOARDS");
        hdri.create();
      }

      if (imgSeqCb.value) {
        var imgSeq = new Folder();
        imgSeq.changePath(fpath + "/IMG");
        imgSeq.create();
      }

      if (referenceCb.value) {
        var reference = new Folder();
        reference.changePath(fpath + "/REFERENCE");
        reference.create();
      }

      throw 'error';

    } catch(error) {
      alert("Unable to create folders.")
      }

	}

	function createProjectFolders()
	{
    clearOutput()

		// create project file folders
		if (threeDCb.value)
			folder3d = app.project.items.addFolder("3D");
		if (footageCb.value)
			folderFootage = app.project.items.addFolder("FOOTAGE");
		if (stillsCb.value)
			folderStills = app.project.items.addFolder("IMG");
		if (compsCb.value)
			folderComps = app.project.items.addFolder("COMPS");
		if (sourceCompsCb.value)
			folderPhotoshop = app.project.items.addFolder("SOURCE COMPS");
		if (preCompsCb.value)
			folderPhotoshop = app.project.items.addFolder("PRE COMPS");		
		if (finalsCb.value)
			folderFinals = app.project.items.addFolder("RENDERS");
		if (audioCb.value)
			folderAudio = app.project.items.addFolder("AUDIO");
		if (illustratorCb.value)
			folderIllustrator = app.project.items.addFolder("AI");
		if (photoshopCb.value)
			folderPhotoshop = app.project.items.addFolder("PS");
		if (cameraRawCb.value)
			folderCameraRaw = app.project.items.addFolder("C4D");
		if (hdriCb.value)
			folderHdri = app.project.items.addFolder("BOARDS");
		if (imgSeqCb.value)
			folderImgSeq = app.project.items.addFolder("IMG");
		if (referenceCb.value)
			folderReference= app.project.items.addFolder("REFERENCE");
		
		// create directories on disk
		if (createOnDiskCb.value)
			createDirectoryStructure();

		write("Directory structure created");
	}

	function selectDirectory()
	{
		var pathLocation = Folder.selectDialog("Save directories in:");

		if (pathLocation != null) {
			fpath = pathLocation.toString();
			directoryTxtField.text = fpath;
		}
	}

	function helpMe()
	{
		alert(app.project.item(1).mainSource.file);
		//alert ("Hungry Hungry Hippo!!", "Don't press me");
	}



//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// interface
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

	function createUI(thisObj)
	{
		pal = (thisObj instanceof Panel) ? thisObj : new Window("palette","ProjectStructureWin", undefined, {resizeable:true});
		
		if (pal != null) {
			var projectStructureText = pal.add("statictext", [15, 10, 120, 30], "ProjectFolders");
			
			// create folder checkbox controls
			threeDCb = pal.add("checkbox", [15, projectStructureText.bounds.bottom + 10, 130, 60],"3D"); 
			threeDCb.value = false;
			
			footageCb = pal.add("checkbox", [15, threeDCb.bounds.bottom + 10, 130, 90],"Footage"); 
			footageCb.value = false;
			
			stillsCb = pal.add("checkbox", [15, footageCb.bounds.bottom + 10, 130, 120],"Images"); 
			stillsCb.value = false;
			
			compsCb = pal.add("checkbox", [15, stillsCb.bounds.bottom + 10, 130, 150],"Comps"); 
			compsCb.value = false;
			
			sourceCompsCb = pal.add("checkbox", [15, compsCb.bounds.bottom + 10, 130, 180],"Source Comps"); 
			sourceCompsCb.value = false;
			
			preCompsCb = pal.add("checkbox", [15, sourceCompsCb.bounds.bottom + 10, 130, 210],"Pre Comps"); 
			preCompsCb.value = false;

			finalsCb = pal.add("checkbox", [15, preCompsCb.bounds.bottom + 10, 130, 240],"Renders"); 
			finalsCb.value = false;			
			
			audioCb = pal.add("checkbox", [160, projectStructureText.bounds.bottom + 10, 275, 60],"Audio"); 
			audioCb.value = false;
			
			illustratorCb = pal.add("checkbox", [160, audioCb.bounds.bottom + 10, 275, 90],"Illustrator"); 
			illustratorCb.value = false;
			
			photoshopCb = pal.add("checkbox", [160, illustratorCb.bounds.bottom + 10, 275, 120],"Photoshop"); 
			photoshopCb.value = false;
			
			cameraRawCb = pal.add("checkbox", [160, photoshopCb.bounds.bottom + 10, 275, 150],"Cinema 4D"); 
			cameraRawCb.value = false;			
			
			hdriCb = pal.add("checkbox", [160, cameraRawCb.bounds.bottom + 10, 275, 180],"Boards"); 
			hdriCb.value = false;
			
			imgSeqCb = pal.add("checkbox", [160, hdriCb.bounds.bottom + 10, 275, 210],"Img"); 
			imgSeqCb.value = false;
			
			referenceCb = pal.add("checkbox", [160, imgSeqCb.bounds.bottom + 10, 275, 240],"Reference"); 
			referenceCb.value = false;
			
			selectAllCb = pal.add("checkbox", [15, referenceCb.bounds.bottom + 10, 130, 270],"Select All");
			selectAllCb.value = false;
			
			var createProjectFolderBtn = pal.add("button", [15, selectAllCb.bounds.bottom + 10, 115, 315], "Create Folders");
			
			createOnDiskCb = pal.add("checkbox", [15, createProjectFolderBtn.bounds.bottom + 10, 300, 345],"Create Directories on disk?");
			createOnDiskCb.value = false;
			
			var selectDirectoryBtn = pal.add("button", [15, createOnDiskCb.bounds.bottom + 10, 115, 390], "Directory");
			selectDirectoryBtn.enabled = false;
      directoryTxtField = pal.add('edittext', [selectDirectoryBtn.bounds.right + 5, createOnDiskCb.bounds.bottom + 10, 350, 390]);
			
			/*
			var winGfx = pal.graphics;
			var darkColor = winGfx.newPen(winGfx.BrushType.SOLID_COLOR,[0,0,0], 1);
			directoryTxtField.disabledforegroundColor = darkColor;
			*/
			
			//var helpBtn = pal.add("button", [105, directoryTxtField.bounds.bottom + 5, 205, 90], "Don't Press me");
			//helpBtn.onClick = helpMe;
			
			//-----
			
			// This should really be a array that you can loop through.
			selectAllCb.onClick = function()
			{
				if (selectAllCb.value == true) {
					threeDCb.value = true;
					footageCb.value = true;
					stillsCb.value = true;
					compsCb.value = true;
					sourceCompsCb.value = true;
					preCompsCb.value = true;
					finalsCb.value = true;
					audioCb.value = true;
					illustratorCb.value = true;
					photoshopCb.value = true;
					cameraRawCb.value = true;
					hdriCb.value = true;
					imgSeqCb.value = true;
					referenceCb.value = true;
				}
				else {
					threeDCb.value = false;
					footageCb.value = false;
					stillsCb.value = false;
					compsCb.value = false;
					sourceCompsCb.value = false;
					preCompsCb.value = false;
					finalsCb.value = false;
					audioCb.value = false;
					illustratorCb.value = false;
					photoshopCb.value = false;
					cameraRawCb.value = false;
					hdriCb.value = false;
					imgSeqCb.value = false;
					referenceCb.value = false;				
				}
			};
				
			selectDirectoryBtn.onClick = selectDirectory;
			createProjectFolderBtn.onClick = function()
			{
				if((createOnDiskCb.value == true) && (directoryTxtField.text ==""))
					alert("Please select a destination directory.");
				else
					createProjectFolders();
			};

			createOnDiskCb.onClick = function()
			{
				if (selectDirectoryBtn.enabled == false)
					selectDirectoryBtn.enabled = true;
				else
					selectDirectoryBtn.enabled = false;
			};
		//-----
		}
	
		return pal;
	}
	
	var win=createUI(this);
	if(win instanceof Window) win.show();
}
// ...hippo!

