const { Router } = require('express');
const res = require('express/lib/response');
const { removeSync } = require('fs-extra');
const router = Router();

router.get('/',(req,res) => res.json({text:'Hello API World'}));

module.exports =router;