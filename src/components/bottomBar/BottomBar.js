import React from 'react'
import { Desc } from "@components/text/Text";
import { Link } from '../text/Text';
import * as colors from '@colors';

export default function BottomBar() {
  return (
      <div className="row bottombar-design">
        <div className="col-lg-3">
        </div>
        <div className="col-lg-6 text-center">
          <Desc>©2021 Contrax. All rights reserved.</Desc>
        </div>
      </div>
  )
}
