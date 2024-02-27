import React from "react";
import './side.css';
export default function Sidebar() {
    return (
        <div class="s-layout">
            <div class="s-layout__sidebar">
                <a class="s-sidebar__trigger" href="#0">
                    <i class="fa fa-bars"></i>
                </a>

                <nav class="s-sidebar__nav">
                    <ul>
                        <li>
                            <a class="s-sidebar__nav-link" href="#0">
                                <i class="fa fa-home"></i><em>Home</em>
                            </a>
                        </li>
                        <li>
                            <a class="s-sidebar__nav-link" href="#0">
                                <i class="fa fa-user"></i><em>My Profile</em>
                            </a>
                        </li>
                        <li>
                            <a class="s-sidebar__nav-link" href="#0">
                                <i class="fa fa-camera"></i><em>Camera</em>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
{/* 
            <main class="s-layout__content">
                <h1>Full View, Please!</h1>
            </main> */}
        </div>

    )
}