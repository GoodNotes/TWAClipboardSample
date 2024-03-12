package com.goodnotesapp.twaclipboardsample

import android.net.Uri
import android.os.Bundle
import com.google.androidbrowserhelper.trusted.LauncherActivity
import com.google.androidbrowserhelper.trusted.TwaLauncher

class MainActivity : LauncherActivity() {

    private lateinit var twaLauncher: TwaLauncher

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        twaLauncher = TwaLauncher(this)
        // Use the local IP address of your development machine.
        twaLauncher.launch(Uri.parse("https://192.168.1.248:3000"))
    }
}