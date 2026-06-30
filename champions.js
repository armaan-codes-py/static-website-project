// JavaScript Document

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle("open");  
};

// Buttone Top

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 100) {
		toTop.classList.add("active")
	} else {
		toTop.classList.remove("active")
	}
})

// Sezione Garen

document.addEventListener("DOMContentLoaded", function () {
    var garenImage = document.getElementById("garen-image");
    garenImage.style.display = "none";

    var garenRunes = document.getElementById("garen-runes");
    garenRunes.style.display = "none";

    var garenSum = document.getElementById("garen-sum");
    garenSum.style.display = "none";

    var garenAbility = document.getElementById("garen-ability");
    garenAbility.style.display = "none";
	
	var garenQ = document.getElementById("garen2");
    garenQ.style.display = "none";
	
	var garenW = document.getElementById("garen3");
    garenW.style.display = "none";
	
	var garenE = document.getElementById("garen4");
    garenE.style.display = "none";
	
	var garenR = document.getElementById("garen5");
    garenR.style.display = "none";
	
	var sections = ["garen1", "garen2", "garen3", "garen4", "garen5"];

    function removeSelectedImageClass() {
        var images = document.querySelectorAll('.garen-ability img');
        images.forEach(function (image) {
            image.classList.remove('selected-image');
            image.style.border = 'none';
        });
    }

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        section.style.display = (sections[i] === "garen1") ? "block" : "none";
    }

    var initialSelectedImage = document.getElementById('garen-passive-img');
    if (initialSelectedImage) {
        initialSelectedImage.classList.add('selected-image');
        initialSelectedImage.style.border = '3px solid #C89B3C';
    }
});

function removeSelectedImageClass() {
    var images = document.querySelectorAll('.garen-ability img');
    images.forEach(function (image) {
        image.classList.remove('selected-image');
        image.style.border = 'none';
    });
}

function handleImageClick0(imageId, sectionId, borderColor) {
    hideAllGarenAbilitySectionsExcept(sectionId);
    removeSelectedImageClass();
    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('selected-image');
        selectedImage.style.border = '3px solid ' + borderColor;
    }
}

function displayImageGaren() {
    var garenImage = document.getElementById("garen-image");
    garenImage.style.display = (garenImage.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept("garen-image");
}

function displayImageRunes() {
    var garenRunes = document.getElementById("garen-runes");
    garenRunes.style.display = (garenRunes.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept("garen-runes");
}

function displayImageSum() {
    var garenSum = document.getElementById("garen-sum");
    garenSum.style.display = (garenSum.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept("garen-sum");
}

function displayImageAbility() {
    var garenAbility = document.getElementById("garen-ability");
    garenAbility.style.display = (garenAbility.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept("garen-ability");
}

function displayGaren1() {
    hideAllGarenAbilitySectionsExcept("garen1");
}

function displayGaren2() {
    hideAllGarenAbilitySectionsExcept("garen2");
}

function displayGaren3() {
    hideAllGarenAbilitySectionsExcept("garen3");
}

function displayGaren4() {
    hideAllGarenAbilitySectionsExcept("garen4");
}

function displayGaren5() {
    hideAllGarenAbilitySectionsExcept("garen5");
}

document.getElementById('garen-passive').addEventListener('click', function (event) {
	handleImageClick0('garen-passive-img', 'garen1', '#C89B3C');
    playVideo('../MOVIES/WEBM/garen_passive.webm');
    event.stopPropagation();
});

document.getElementById('garenq').addEventListener('click', function (event) {
	handleImageClick0('garen-q-img', 'garen2', '#C89B3C');
    playVideo('../MOVIES/WEBM/garen_q.webm');
    event.stopPropagation();
});

document.getElementById('garenw').addEventListener('click', function (event) {
	handleImageClick0('garen-w-img', 'garen3', '#C89B3C');
    playVideo('../MOVIES/WEBM/garen_w.webm');
    event.stopPropagation();
});

document.getElementById('garene').addEventListener('click', function (event) {
	handleImageClick0('garen-e-img', 'garen4', '#C89B3C');
    playVideo('../MOVIES/WEBM/garen_e.webm');
    event.stopPropagation();
});

document.getElementById('garenr').addEventListener('click', function (event) {
	handleImageClick0('garen-r-img', 'garen5', '#C89B3C');
    playVideo('../MOVIES/WEBM/garen_r.webm');
    event.stopPropagation();
});

function playVideo(videoPath) {
    document.querySelectorAll('#video video').forEach(function (video) {
        video.style.display = 'none';
    });

    var video = document.getElementById('video_pass');
    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

function hideAllSectionsExcept(sectionId) {
    var sections = ["garen-image", "garen-runes", "garen-sum", "garen-ability"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

function hideAllGarenAbilitySectionsExcept(sectionId) {
    var sections = ["garen1", "garen2", "garen3", "garen4", "garen5"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Fine Sezione Garen

// Sezione Master Yi

document.addEventListener("DOMContentLoaded", function () {
    var masterImage = document.getElementById("master-image");
    masterImage.style.display = "none";

    var masterRunes = document.getElementById("master-runes");
    masterRunes.style.display = "none";

    var masterSum = document.getElementById("master-sum");
    masterSum.style.display = "none";

    var masterAbility = document.getElementById("master-ability");
    masterAbility.style.display = "none";
	
	var masterQ = document.getElementById("master2");
    masterQ.style.display = "none";
	
	var masterW = document.getElementById("master3");
    masterW.style.display = "none";
	
	var masterE = document.getElementById("master4");
    masterE.style.display = "none";
	
	var masterR = document.getElementById("master5");
    masterR.style.display = "none";
	
	var sections = ["master1", "master2", "master3", "master4", "master5"];

    function removeSelectedImageClass1() {
        var images = document.querySelectorAll('.master-ability img');
        images.forEach(function (image) {
            image.classList.remove('selected-image');
            image.style.border = 'none';
        });
    }

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        section.style.display = (sections[i] === "master1") ? "block" : "none";
    }

    var initialSelectedImage = document.getElementById('master-passive-img');
    if (initialSelectedImage) {
        initialSelectedImage.classList.add('selected-image');
        initialSelectedImage.style.border = '3px solid #C89B3C';
    }
});

function removeSelectedImageClass1() {
    var images = document.querySelectorAll('.master-ability img');
    images.forEach(function (image) {
        image.classList.remove('selected-image');
        image.style.border = 'none';
    });
}

function handleImageClick1(imageId, sectionId, borderColor) {
    hideAllMasterAbilitySectionsExcept(sectionId);
    removeSelectedImageClass1();
    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('selected-image1');
        selectedImage.style.border = '3px solid' + borderColor;
    }
}

function displayImageMaster() {
    var masterImage = document.getElementById("master-image");
    masterImage.style.display = (masterImage.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept1("master-image");
}

function displayImageMasterRunes() {
    var masterRunes = document.getElementById("master-runes");
    masterRunes.style.display = (masterRunes.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept1("master-runes");
}

function displayImageMasterSum() {
    var masterSum = document.getElementById("master-sum");
    masterSum.style.display = (masterSum.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept1("master-sum");
}

function displayImageMasterAbility() {
    var masterAbility = document.getElementById("master-ability");
    masterAbility.style.display = (masterAbility.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept1("master-ability");
}

function displayMaster1() {
    hideAllMasterAbilitySectionsExcept("master1");
}

function displayMaster2() {
    hideAllMasterAbilitySectionsExcept("master2");
}

function displayMaster3() {
    hideAllMasterAbilitySectionsExcept("master3");
}

function displayMaster4() {
    hideAllMasterAbilitySectionsExcept("master4");
}

function displayMaster5() {
    hideAllMasterAbilitySectionsExcept("master5");
}

document.getElementById('master-passive').addEventListener('click', function (event) {
	handleImageClick1('master-passive-img', 'master1', '#C89B3C');
    playVideo1('../MOVIES/WEBM/master-pass.webm');
    event.stopPropagation();
});

document.getElementById('masterq').addEventListener('click', function (event) {
	handleImageClick1('master-q-img', 'master2', '#C89B3C');
    playVideo1('../MOVIES/WEBM/master-q.webm');
    event.stopPropagation();
});

document.getElementById('masterw').addEventListener('click', function (event) {
	handleImageClick1('master-w-img', 'master3', '#C89B3C');
    playVideo1('../MOVIES/WEBM/master-w.webm');
    event.stopPropagation();
});

document.getElementById('mastere').addEventListener('click', function (event) {
	handleImageClick1('master-e-img', 'master4', '#C89B3C');
    playVideo1('../MOVIES/WEBM/master-e.webm');
    event.stopPropagation();
});

document.getElementById('masterr').addEventListener('click', function (event) {
	handleImageClick1('master-r-img', 'master5', '#C89B3C');
    playVideo1('../MOVIES/WEBM/master-r.webm');
    event.stopPropagation();
});

function playVideo1(videoPath) {
    document.querySelectorAll('#video-master video').forEach(function (video) {
        video.style.display = 'none';
    });

    var video = document.getElementById('video-master');
    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

function hideAllSectionsExcept1(sectionId) {
    var sections = ["master-image", "master-runes", "master-sum", "master-ability"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

function hideAllMasterAbilitySectionsExcept(sectionId) {
    var sections = ["master1", "master2", "master3", "master4", "master5"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Fine Sezione Master Yi

// Sezione Ahri

document.addEventListener("DOMContentLoaded", function () {
    var ahriImage = document.getElementById("ahri-image");
    ahriImage.style.display = "none";

    var ahriRunes = document.getElementById("ahri-runes");
    ahriRunes.style.display = "none";

    var ahriSum = document.getElementById("ahri-sum");
    ahriSum.style.display = "none";

    var ahriAbility = document.getElementById("ahri-ability");
    ahriAbility.style.display = "none";
	
	var ahriQ = document.getElementById("ahri2");
    ahriQ.style.display = "none";
	
	var ahriW = document.getElementById("ahri3");
    ahriW.style.display = "none";
	
	var ahriE = document.getElementById("ahri4");
    ahriE.style.display = "none";
	
	var ahriR = document.getElementById("ahri5");
    ahriR.style.display = "none";
	
	var sections = ["ahri1", "ahri2", "ahri3", "ahri4", "ahri5"];

    function removeSelectedImageClass2() {
        var images = document.querySelectorAll('.ahri-ability img');
        images.forEach(function (image) {
            image.classList.remove('selected-image');
            image.style.border = 'none';
        });
    }

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        section.style.display = (sections[i] === "ahri1") ? "block" : "none";
    }

    var initialSelectedImage = document.getElementById('ahri-passive-img');
    if (initialSelectedImage) {
        initialSelectedImage.classList.add('selected-image');
        initialSelectedImage.style.border = '3px solid #C89B3C';
    }
});

function removeSelectedImageClass2() {
    var images = document.querySelectorAll('.ahri-ability img');
    images.forEach(function (image) {
        image.classList.remove('selected-image');
        image.style.border = 'none';
    });
}

function handleImageClick2(imageId, sectionId, borderColor) {
    hideAllAhriAbilitySectionsExcept(sectionId);
    removeSelectedImageClass2();
    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('selected-image1');
        selectedImage.style.border = '3px solid' + borderColor;
    }
}

function displayImageAhri() {
    var ahriImage = document.getElementById("ahri-image");
    ahriImage.style.display = (ahriImage.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept2("ahri-image");
}

function displayImageAhriRunes() {
    var ahriRunes = document.getElementById("ahri-runes");
    ahriRunes.style.display = (ahriRunes.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept2("ahri-runes");
}

function displayImageAhriSum() {
    var ahriSum = document.getElementById("ahri-sum");
    ahriSum.style.display = (ahriSum.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept2("ahri-sum");
}

function displayImageAhriAbility() {
    var ahriAbility = document.getElementById("ahri-ability");
    ahriAbility.style.display = (ahriAbility.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept2("ahri-ability");
}

function displayAhri1() {
    hideAllAhriAbilitySectionsExcept("ahri1");
}

function displayAhri2() {
    hideAllAhriAbilitySectionsExcept("ahri2");
}

function displayAhri3() {
    hideAllAhriAbilitySectionsExcept("ahri3");
}

function displayAhri4() {
    hideAllAhriAbilitySectionsExcept("ahri4");
}

function displayAhri5() {
    hideAllAhriAbilitySectionsExcept("ahri5");
}

document.getElementById('ahri-passive').addEventListener('click', function (event) {
	handleImageClick2('ahri-passive-img', 'ahri1', '#C89B3C');
    playVideo2('../MOVIES/WEBM/ahri-pass.webm');
    event.stopPropagation();
});

document.getElementById('ahriq').addEventListener('click', function (event) {
	handleImageClick2('ahri-q-img', 'ahri2', '#C89B3C');
    playVideo2('../MOVIES/WEBM/ahri-q.webm');
    event.stopPropagation();
});

document.getElementById('ahriw').addEventListener('click', function (event) {
	handleImageClick2('ahri-w-img', 'ahri3', '#C89B3C');
    playVideo2('../MOVIES/WEBM/ahri-w.webm');
    event.stopPropagation();
});

document.getElementById('ahrie').addEventListener('click', function (event) {
	handleImageClick2('ahri-e-img', 'ahri4', '#C89B3C');
    playVideo2('../MOVIES/WEBM/ahri-e.webm');
    event.stopPropagation();
});

document.getElementById('ahrir').addEventListener('click', function (event) {
	handleImageClick2('ahri-r-img', 'ahri5', '#C89B3C');
    playVideo2('../MOVIES/WEBM/ahri-r.webm');
    event.stopPropagation();
});

function playVideo2(videoPath) {
    document.querySelectorAll('#video-ahri video').forEach(function (video) {
        video.style.display = 'none';
    });

    var video = document.getElementById('video-ahri');
    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

function hideAllSectionsExcept2(sectionId) {
    var sections = ["ahri-image", "ahri-runes", "ahri-sum", "ahri-ability"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

function hideAllAhriAbilitySectionsExcept(sectionId) {
    var sections = ["ahri1", "ahri2", "ahri3", "ahri4", "ahri5"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Fine Sezione Ahri

// Sezione Ashe

document.addEventListener("DOMContentLoaded", function () {
    var asheImage = document.getElementById("ashe-image");
    asheImage.style.display = "none";

    var asheRunes = document.getElementById("ashe-runes");
    asheRunes.style.display = "none";

    var asheSum = document.getElementById("ashe-sum");
    asheSum.style.display = "none";

    var asheAbility = document.getElementById("ashe-ability");
    asheAbility.style.display = "none";
	
	var asheQ = document.getElementById("ashe2");
    asheQ.style.display = "none";
	
	var asheW = document.getElementById("ashe3");
    asheW.style.display = "none";
	
	var asheE = document.getElementById("ashe4");
    asheE.style.display = "none";
	
	var asheR = document.getElementById("ashe5");
    asheR.style.display = "none";
	
	var sections = ["ashe1", "ashe2", "ashe3", "ashe4", "ashe5"];

    function removeSelectedImageClass3() {
        var images = document.querySelectorAll('.ashe-ability img');
        images.forEach(function (image) {
            image.classList.remove('selected-image');
            image.style.border = 'none';
        });
    }

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        section.style.display = (sections[i] === "ashe1") ? "block" : "none";
    }

    var initialSelectedImage = document.getElementById('ashe-passive-img');
    if (initialSelectedImage) {
        initialSelectedImage.classList.add('selected-image');
        initialSelectedImage.style.border = '3px solid #C89B3C';
    }
});

function removeSelectedImageClass3() {
    var images = document.querySelectorAll('.ashe-ability img');
    images.forEach(function (image) {
        image.classList.remove('selected-image');
        image.style.border = 'none';
    });
}

function handleImageClick3(imageId, sectionId, borderColor) {
    hideAllAsheAbilitySectionsExcept(sectionId);
    removeSelectedImageClass3();
    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('selected-image1');
        selectedImage.style.border = '3px solid' + borderColor;
    }
}

function displayImageAshe() {
    var asheImage = document.getElementById("ashe-image");
    asheImage.style.display = (asheImage.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept3("ashe-image");
}

function displayImageAsheRunes() {
    var asheRunes = document.getElementById("ashe-runes");
    asheRunes.style.display = (asheRunes.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept3("ashe-runes");
}

function displayImageAsheSum() {
    var asheSum = document.getElementById("ashe-sum");
    asheSum.style.display = (asheSum.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept3("ashe-sum");
}

function displayImageAsheAbility() {
    var asheAbility = document.getElementById("ashe-ability");
    asheAbility.style.display = (asheAbility.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept3("ashe-ability");
}

function displayAshe1() {
    hideAllAsheAbilitySectionsExcept("ashe1");
}

function displayAshe2() {
    hideAllAsheAbilitySectionsExcept("ashe2");
}

function displayAshe3() {
    hideAllAsheAbilitySectionsExcept("ashe3");
}

function displayAshe4() {
    hideAllAsheAbilitySectionsExcept("ashe4");
}

function displayAshe5() {
    hideAllAsheAbilitySectionsExcept("ashe5");
}

document.getElementById('ashe-passive').addEventListener('click', function (event) {
	handleImageClick3('ashe-passive-img', 'ashe1', '#C89B3C');
    playVideo3('../MOVIES/WEBM/ashe-pass.webm');
    event.stopPropagation();
});

document.getElementById('asheq').addEventListener('click', function (event) {
	handleImageClick3('ashe-q-img', 'ashe2', '#C89B3C');
    playVideo3('../MOVIES/WEBM/ashe-q.webm');
    event.stopPropagation();
});

document.getElementById('ashew').addEventListener('click', function (event) {
	handleImageClick3('ashe-w-img', 'ashe3', '#C89B3C');
    playVideo3('../MOVIES/WEBM/ashe-w.webm');
    event.stopPropagation();
});

document.getElementById('ashee').addEventListener('click', function (event) {
	handleImageClick3('ashe-e-img', 'ashe4', '#C89B3C');
    playVideo3('../MOVIES/WEBM/ashe-e.webm');
    event.stopPropagation();
});

document.getElementById('asher').addEventListener('click', function (event) {
	handleImageClick3('ashe-r-img', 'ashe5', '#C89B3C');
    playVideo3('../MOVIES/WEBM/ashe-r.webm');
    event.stopPropagation();
});

function playVideo3(videoPath) {
    document.querySelectorAll('#video-ashe video').forEach(function (video) {
        video.style.display = 'none';
    });

    var video = document.getElementById('video-ashe');
    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

function hideAllSectionsExcept3(sectionId) {
    var sections = ["ashe-image", "ashe-runes", "ashe-sum", "ashe-ability"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

function hideAllAsheAbilitySectionsExcept(sectionId) {
    var sections = ["ashe1", "ashe2", "ashe3", "ashe4", "ashe5"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

// Fine Sezione Ashe

// Sezione Yuumi

document.addEventListener("DOMContentLoaded", function () {
    var yuumiImage = document.getElementById("yuumi-image");
    yuumiImage.style.display = "none";

    var yuumiRunes = document.getElementById("yuumi-runes");
    yuumiRunes.style.display = "none";

    var yuumiSum = document.getElementById("yuumi-sum");
    yuumiSum.style.display = "none";

    var yuumiAbility = document.getElementById("yuumi-ability");
    yuumiAbility.style.display = "none";
	
	var yuumiQ = document.getElementById("yuumi2");
    yuumiQ.style.display = "none";
	
	var yuumiW = document.getElementById("yuumi3");
    yuumiW.style.display = "none";
	
	var yuumiE = document.getElementById("yuumi4");
    yuumiE.style.display = "none";
	
	var yuumiR = document.getElementById("yuumi5");
    yuumiR.style.display = "none";
	
	var sections = ["yuumi1", "yuumi2", "yuumi3", "yuumi4", "yuumi5"];

    function removeSelectedImageClass4() {
        var images = document.querySelectorAll('.yuumi-ability img');
        images.forEach(function (image) {
            image.classList.remove('selected-image');
            image.style.border = 'none';
        });
    }

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        section.style.display = (sections[i] === "yuumi1") ? "block" : "none";
    }

    var initialSelectedImage = document.getElementById('yuumi-passive-img');
    if (initialSelectedImage) {
        initialSelectedImage.classList.add('selected-image');
        initialSelectedImage.style.border = '3px solid #C89B3C';
    }
});

function removeSelectedImageClass4() {
    var images = document.querySelectorAll('.yuumi-ability img');
    images.forEach(function (image) {
        image.classList.remove('selected-image');
        image.style.border = 'none';
    });
}

function handleImageClick4(imageId, sectionId, borderColor) {
    hideAllYuumiAbilitySectionsExcept(sectionId);
    removeSelectedImageClass4();
    var selectedImage = document.getElementById(imageId);
    if (selectedImage) {
        selectedImage.classList.add('selected-image1');
        selectedImage.style.border = '3px solid' + borderColor;
    }
}

function displayImageYuumi() {
    var yuumiImage = document.getElementById("yuumi-image");
    yuumiImage.style.display = (yuumiImage.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept4("yuumi-image");
}

function displayImageYuumiRunes() {
    var yuumiRunes = document.getElementById("yuumi-runes");
    yuumiRunes.style.display = (yuumiRunes.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept4("yuumi-runes");
}

function displayImageYuumiSum() {
    var yuumiSum = document.getElementById("yuumi-sum");
    yuumiSum.style.display = (yuumiSum.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept4("yuumi-sum");
}

function displayImageYuumiAbility() {
    var yuumiAbility = document.getElementById("yuumi-ability");
    yuumiAbility.style.display = (yuumiAbility.style.display === "none") ? "block" : "none";
    hideAllSectionsExcept4("yuumi-ability");
}

function displayYuumi1() {
    hideAllYuumiAbilitySectionsExcept("yuumi1");
}

function displayYuumi2() {
    hideAllYuumiAbilitySectionsExcept("yuumi2");
}

function displayYuumi3() {
    hideAllYuumiAbilitySectionsExcept("yuumi3");
}

function displayYuumi4() {
    hideAllYuumiAbilitySectionsExcept("yuumi4");
}

function displayYuumi5() {
    hideAllYuumiAbilitySectionsExcept("yuumi5");
}

document.getElementById('yuumi-passive').addEventListener('click', function (event) {
	handleImageClick4('yuumi-passive-img', 'yuumi1', '#C89B3C');
    playVideo4('../MOVIES/WEBM/yuumi-pass.webm');
    event.stopPropagation();
});

document.getElementById('yuumiq').addEventListener('click', function (event) {
	handleImageClick4('yuumi-q-img', 'yuumi2', '#C89B3C');
    playVideo4('../MOVIES/WEBM/yuumi-q.webm');
    event.stopPropagation();
});

document.getElementById('yuumiw').addEventListener('click', function (event) {
	handleImageClick4('yuumi-w-img', 'yuumi3', '#C89B3C');
    playVideo4('../MOVIES/WEBM/yuumi-w.webm');
    event.stopPropagation();
});

document.getElementById('yuumie').addEventListener('click', function (event) {
	handleImageClick4('yuumi-e-img', 'yuumi4', '#C89B3C');
    playVideo4('../MOVIES/WEBM/yuumi-e.webm');
    event.stopPropagation();
});

document.getElementById('yuumir').addEventListener('click', function (event) {
	handleImageClick4('yuumi-r-img', 'yuumi5', '#C89B3C');
    playVideo4('../MOVIES/WEBM/yuumi-r.webm');
    event.stopPropagation();
});

function playVideo4(videoPath) {
    document.querySelectorAll('#video-yuumi video').forEach(function (video) {
        video.style.display = 'none';
    });

    var video = document.getElementById('video-yuumi');
    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

function hideAllSectionsExcept4(sectionId) {
    var sections = ["yuumi-image", "yuumi-runes", "yuumi-sum", "yuumi-ability"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}

function hideAllYuumiAbilitySectionsExcept(sectionId) {
    var sections = ["yuumi1", "yuumi2", "yuumi3", "yuumi4", "yuumi5"];

    for (var i = 0; i < sections.length; i++) {
        var section = document.getElementById(sections[i]);
        if (sections[i] === sectionId) {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        }
    }
}






