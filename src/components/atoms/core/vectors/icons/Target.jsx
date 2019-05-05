/*
 * Copyright (C) 2018-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2018-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Docs
 * Repository: https://github.com/arcticicestudio/nord-docs
 * License:    MIT
 */

import React from "react";
import styled from "styled-components";

import { ReactComponent as TargetSVG } from "assets/images/icons/feathericons/target.svg";

import { iconDefaultProps, iconPropTypes, themeModeStrokeColorStyles } from "../shared";

const TargetIcon = styled(TargetSVG)`
  ${themeModeStrokeColorStyles};
  fill: none;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
`;

/**
 * The "target" icon from "Feather Icons" as styled SVG vector graphic component.
 * By default, it uses the fill color and transition based on the current active global theme mode.
 *
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @since 0.12.0
 * @see https://feathericons.com
 */
const Target = ({ className, svgRef }) => <TargetIcon className={className} svgRef={svgRef} />;

Target.propTypes = iconPropTypes;

Target.defaultProps = iconDefaultProps;

export default Target;
