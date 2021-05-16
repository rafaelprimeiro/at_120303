var express = require('express');
var router = express.Router();

const cursos = [
    {
        "id": 9,
        "image": "https://picsum.photos/id/9/960/450",
        "title": "Lorem ipsum dolor sit amet",
    },
    {
        "id": 1059,
        "image": "https://picsum.photos/id/1059/960/450",
        "title": "Quisque blandit enim non",
    },
    {
        "id": 1060,
        "image": "https://picsum.photos/id/1060/960/450",
        "title": "Mauris at lorem vitae",
    },
    {
        "id": 1082,
        "image": "https://picsum.photos/id/1082/960/450",
        "title": "Praesent eu dui accumsan",
    },
    {
        "id": 119,
        "image": "https://picsum.photos/id/119/960/450",
        "title": "Praesent fringilla nibh eget",
    },
    {
        "id": 133,
        "image": "https://picsum.photos/id/133/960/450",
        "title": "In id justo mattis",
    },
    {
        "id": 139,
        "image": "https://picsum.photos/id/139/960/450",
        "title": "Curabitur eu justo cursus",
    },
    {
        "id": 201,
        "image": "https://picsum.photos/id/201/960/450",
        "title": "Integer egestas",
    },
    {
        "id": 225,
        "image": "https://picsum.photos/id/225/960/450",
        "title": "Vestibulum lobortis",
    },
    {
        "id": 250,
        "image": "https://picsum.photos/id/250/960/450",
        "title": "Nulla iaculis magna",
    },
    {
        "id": 304,
        "image": "https://picsum.photos/id/304/960/450",
        "title": "Proin commodo magna",
    },
    {
        "id": 366,
        "image": "https://picsum.photos/id/366/960/450",
        "title": "Proin fringilla",
    },
    {
        "id": 39,
        "image": "https://picsum.photos/id/39/960/450",
        "title": "Donec",
    },
]

const message = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed eleifend mauris. Mauris aliquet ligula nulla, at ornare ligula auctor non. Phasellus accumsan malesuada tortor, eu rutrum purus ornare non. Nam metus felis, posuere sed dolor sit amet, congue dapibus elit. Proin ultricies, arcu vel ultricies tempus, sapien mi gravida purus, in cursus nisi augue sed neque. Quisque blandit luctus mollis. Ut gravida sapien urna, fringilla consequat erat pharetra sed. Mauris in volutpat felis. Vivamus sed enim placerat, imperdiet eros eget, laoreet velit. Vestibulum egestas sapien lacus, a euismod urna porttitor vel. Sed rutrum leo eget dolor luctus iaculis.

Sed varius dui vitae nibh cursus finibus. Nullam ac ipsum quis nibh feugiat gravida et at ante. Curabitur sollicitudin ipsum eget risus tempor euismod. Maecenas tincidunt interdum ullamcorper. Praesent ultrices dui est, at condimentum sem fringilla eget. Aenean volutpat, lectus in tempor tempor, ligula turpis interdum nibh, ut accumsan mi urna scelerisque sem. Sed placerat ex congue orci iaculis finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris porta sodales magna a aliquam. Mauris porttitor porta orci, gravida hendrerit augue. Sed non molestie dolor. Vivamus molestie rhoncus est, et ornare turpis egestas eu. Duis viverra neque quis purus porta, eu fermentum enim porttitor. Fusce semper porta tellus sed gravida. Pellentesque eu mauris in mi vulputate feugiat.

Cras interdum sit amet augue non faucibus. Vestibulum ipsum augue, placerat a scelerisque at, suscipit malesuada tortor. Fusce hendrerit eu lorem sed tincidunt. Aenean facilisis vehicula risus, ut iaculis magna rhoncus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio enim, tincidunt in metus dapibus, convallis suscipit enim. Sed luctus aliquet nisi sed elementum. Sed sed est dui. Proin ac ante lobortis, viverra neque eget, placerat diam. Ut non tortor sit amet turpis dictum efficitur. Nulla condimentum, ligula in viverra elementum, purus lacus varius est, et fringilla lectus mi et tortor. Duis quis lacinia tellus.

Quisque iaculis, diam sagittis volutpat ornare, enim eros ullamcorper orci, sed volutpat ligula ante et orci. Donec nibh nunc, consectetur in bibendum non, fringilla eu nulla. Cras condimentum lacus non arcu lobortis venenatis. Nam mattis est at lectus blandit sollicitudin. Nam ipsum leo, ornare at auctor scelerisque, porttitor vitae velit. Integer ac velit vitae lorem dictum pharetra vel blandit sapien. Aliquam molestie mauris sit amet pulvinar luctus. Cras consequat lorem placerat volutpat suscipit.

Cras consequat velit ut imperdiet rutrum. Aliquam ac eros odio. Nam a dapibus magna, ut interdum nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus sem lectus, vehicula vel efficitur sit amet, pellentesque quis risus. Etiam ultrices erat sit amet dignissim varius. Nullam ornare aliquam posuere. Nam vulputate, neque vitae consectetur iaculis, lectus odio venenatis tortor, eu consequat est dui a erat.

Suspendisse faucibus pulvinar risus. Nulla rutrum libero sapien, sit amet sodales mauris commodo lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Nunc dictum id massa vel dictum. Phasellus eu auctor sapien, sit amet vestibulum libero. Phasellus viverra purus lacus, eget posuere lorem pulvinar eu. Phasellus et neque congue, volutpat sem eget, malesuada ipsum. Cras volutpat leo velit, tristique ultrices nibh ullamcorper ac.

Nam non placerat lectus. Fusce aliquam erat nec mollis pharetra. Sed a dapibus metus, in interdum odio. Nulla sodales turpis erat, et vestibulum quam accumsan eu. Fusce congue dui erat, non mattis urna rhoncus non. Fusce nibh ante, scelerisque id tortor eget, ultrices lobortis lacus. Duis erat nibh, pretium nec volutpat bibendum, scelerisque nec diam. Vestibulum sit amet tincidunt odio. Etiam et feugiat tortor.

Nam gravida est non ornare lobortis. Cras mauris massa, mollis in bibendum vitae, feugiat sed sem. Vestibulum sodales vulputate lacus et ullamcorper. Sed dictum blandit justo, eget convallis nisl pellentesque ut. Morbi sit amet quam leo. Cras pharetra facilisis nulla, at pulvinar risus sodales ac. Vivamus vitae tellus fermentum, imperdiet lorem at, sagittis enim. Curabitur orci justo, maximus ac vehicula nec, vehicula scelerisque ligula. Aliquam molestie eget ante consectetur sagittis. Curabitur sagittis nisl at aliquet molestie. Integer at faucibus ex. Pellentesque ac varius quam, non facilisis metus. Sed vitae urna sed est auctor placerat. Nunc non elit magna. Pellentesque quis nisi eget dui imperdiet posuere nec nec ipsum.

Praesent non ligula a diam rutrum aliquam. Quisque pretium enim at velit laoreet suscipit. Integer ullamcorper vulputate tempus. Aenean ullamcorper, ante eget ultrices varius, ex ipsum elementum ipsum, in pharetra ipsum tellus in odio. Praesent et nibh ut turpis venenatis molestie sed sed velit. Aenean venenatis, dolor vitae egestas auctor, lorem mauris iaculis elit, eget feugiat turpis eros non purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis augue quis ipsum ullamcorper, sit amet laoreet ante luctus. Maecenas elit mauris, ornare id aliquam id, blandit vel purus. Etiam lacus nibh, cursus in condimentum at, varius sit amet dolor. Duis commodo libero eget justo rutrum, nec suscipit lacus laoreet. Vestibulum dictum maximus libero porta consectetur. Donec vehicula mauris ornare ultrices accumsan.

Nam sed venenatis nisi. Duis pellentesque sagittis neque, nec euismod ex tincidunt sit amet. Pellentesque sagittis ac erat a ornare. Integer nibh est, facilisis sed blandit aliquam, hendrerit ac velit. Aliquam ac mauris ipsum. Vivamus a nisi et urna lobortis tincidunt. Aliquam congue quam ac purus finibus feugiat.
`

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(cursos)
});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    if (id === undefined || id == null) {
        res.sendStatus(404);
        return
    }
    let result = null;
    cursos.forEach(item => {
        if (id == item.id) {
            result = {
                id: item.id,
                image: item.image,
                title: item.title,
                message: message
            };
            return;
        }
    });
    if (result == null) {
        res.sendStatus(404);
        return;
    }
    res.json(result);
});

module.exports = router;
