import React from 'react';
import { Redirect } from 'react-router';

export default function NotFound() {
    window.location.replace('/404.html');
    return <></>;
}
