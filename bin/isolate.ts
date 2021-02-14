#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { IsolateStack } from '../lib/isolate-stack';

const app = new cdk.App();
new IsolateStack(app, 'IsolateStack');
