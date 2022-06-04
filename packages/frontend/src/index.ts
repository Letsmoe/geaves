#!/usr/env/node

import {colarg} from "colarg"

const args = colarg(process.argv.slice(2)).help()