import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Icon } from '@plone/volto/components';
import rightArrowSVG from '@plone/volto/icons/right-key.svg';
import { Plug } from '@plone/volto/components/manage/Pluggable';

export const ToolbarUserMenu = () => {
  const token = useSelector((state) => state.userSession?.token);
  const userActions = useSelector((state) => state.actions?.actions?.user);
  let elevateAction = userActions.find(
    (action) => action.id === 'solr-elevate',
  );
  if (!token || !elevateAction) {
    return '';
  }
  return (
    <Plug pluggable="toolbar-user-menu" id="elevate-settings-toolbar">
      <li>
        <Link
          to="/controlpanel/elevate-settings"
          tabIndex={0}
          className="elevateSettingsButton"
          id="toolbar-elevate-settings-panel"
        >
          {elevateAction.title}
          <Icon name={rightArrowSVG} size="24px" />
        </Link>
      </li>
    </Plug>
  );
};

export default ToolbarUserMenu;
