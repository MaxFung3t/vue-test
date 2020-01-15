const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const config = require('./task/task.config.json');
const qiniu = require('gulp-qiniu');
const exec = require('child_process').exec;
const path = require('path');
const colors = require('colors');
const del = require('del');
const imageMin = require('gulp-imagemin');
const replace = require('gulp-replace');
const purgecss = require('gulp-purgecss');
const env = process.argv[2];
const version = Math.round(new Date().getTime() / 60 / 1000);
// 上传七牛的二级目录名+版本号
const cdnDir = `${config.appName}-${env}/${version}/`;
// 打包cdn前缀
// const cdnUrl = config[env].cdnUrl + cdnDir;

/*
替换静态资源路径为七牛路径
*/
gulp.task('replace', function () {
	return gulp.src('./dist/**')
		.pipe(replace('/' + config.publicPath, './css/'))
		.pipe(gulp.dest('./dist/'));
});

/*
上传七牛
*/
gulp.task('upload', function () {
	return gulp.src(['./dist/**'])
		.pipe(qiniu({
			accessKey: config[env].ak,
			secretKey: config[env].sk,
			bucket: config[env].bk,
			private: false
		}, {
			dir: cdnDir,
			versioning: false,
			versionFile: '',
			ignore: [],
			concurrent: 10
		}))
});

// 压缩图片
gulp.task('uglify-image', function () {
	return gulp.src('./dist/assets/images/*.*')
		.pipe(imageMin({
			progressive: true
		}))
		.pipe(gulp.dest('./dist/assets/images/'));
});

// 清除publish中的www文件
gulp.task('clean-www', function (callback) {
	del([
		'./publish/www/**/*'
	], callback);
	callback();
});

// 把代码复制过来
gulp.task('copy-www', function () {
	return gulp.src(['./dist/*.html'])
		.pipe(gulp.dest('./publish/www'));
});

// git 切换分支
gulp.task('git-checkout', function (callback) {
	exec('git checkout ' + config[env].env, {
		cwd: path.resolve(__dirname, './publish')
	}, function (error) {
		if (error) {
			console.log(colors.red.underline(error));
		} else {
			console.log(colors.green('切换分支成功'));
			console.log(colors.yellow.underline('当前分支:' + config[env].env));
		}
		callback();
	})
});
// git 拉取远程仓库
gulp.task('git-pull', function (callback) {
	exec('git pull origin ' + config[env].env, {
		cwd: path.resolve(__dirname, './publish')
	}, function (error) {
		if (error) {
			console.log(colors.red.underline(error));
		} else {
			console.log(colors.green('拉取远程仓库成功'));
			console.log(colors.yellow.underline('拉取远程分支:' + config[env].env));
		}
		callback();
	})
});
// git 添加
gulp.task('git-add', function (callback) {
	exec('git add .', {
		cwd: path.resolve(__dirname, './publish')
	}, function (error) {
		if (error) {
			console.log(colors.red.underline(error));
		} else {
			console.log(colors.green('添加更改文件成功成功'));
		}
		callback();
	})
});
// git 提交
gulp.task('git-commit', function (callback) {
	const info = 'auto push version：' + version;
	exec('git commit -m "' + info + '"', {
		cwd: path.resolve(__dirname, './publish')
	}, function (error) {
		if (error) {
			console.log(colors.red.underline(error));
		} else {
			console.log(colors.green('提交修改成功'));
			console.log(colors.yellow.underline('提交信息:' + info));
		}
		callback();
	})
});
// git 推送
gulp.task('git-push', function (callback) {
	exec('git push origin ' + config[env].env, {
		cwd: path.resolve(__dirname, './publish')
	}, function (error) {
		if (error) {
			console.log(colors.red.underline(error));
		} else {
			console.log(colors.green('推送到远程仓库成功'));
			console.log(colors.yellow.underline('当前版本:' + version));
		}
		callback();
	})
});

gulp.task('purgecss', () => {
	return gulp
		.src('dist/**/*.css')
		.pipe(
			purgecss({
				content: ['dist/*.html']
			})
		)
		.pipe(gulp.dest('dist/'))
})

// gulp.task('default', gulpSequence('replace', 'uglify-image', 'git-checkout', 'git-pull', 'clean-www', 'copy-www', 'git-add', 'git-commit', 'git-push', 'upload'));
gulp.task('default', gulpSequence('replace', 'purgecss'));

gulp.task('test', ['default']);
gulp.task('qa', ['default']);
gulp.task('prod', ['default']);