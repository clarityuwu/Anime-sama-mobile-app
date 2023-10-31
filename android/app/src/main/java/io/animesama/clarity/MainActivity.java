package io.animesama.clarity;

import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.view.View;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
      final View decorView = getWindow().getDecorView();

      // Create a loop to enter immersive mode every 3 seconds
      new Handler().postDelayed(new Runnable() {
        @Override
        public void run() {
          // Enter immersive mode
          decorView.setSystemUiVisibility(
            View.SYSTEM_UI_FLAG_IMMERSIVE
              | View.SYSTEM_UI_FLAG_LAYOUT_STABLE
              | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
              | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
              | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
              | View.SYSTEM_UI_FLAG_FULLSCREEN
          );

          // Schedule the next loop iteration
          new Handler().postDelayed(this, 3000);
        }
      }, 3000);
    }
  }
}

